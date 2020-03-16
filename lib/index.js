import axios from "./axios";
const Airtable = require("airtable");
Airtable.configure({ apiKey: process.env.AIRTABLE_API_KEY });
export const productsBase = Airtable.base("appw5TtXrtMTh6wzv");

const FEATURED_CATEGORIES = [
  {
    id: "education",
    name: "Trackers and information 🗞",
    description: "Stay informed and understand the crisis"
  },
  {
    id: "remote-work",
    name: "Remote work tools 💻",
    description: "Go remote with the best tools from the tech industry"
  },

  {
    id: "on-makerlog",
    name: "Shipped on Makerlog ✅",
    description: "Apps shipped in public by indie devs"
  },
  {
    id: "indie-apps",
    name: "Apps by indie developers ✨",
    description: "Handmade with love, our favorite apps from indie devs"
  }
];

export function getCategoryForId(categoryId) {
  return FEATURED_CATEGORIES.find(c => c.id === categoryId);
}

export async function getProducts() {
  return {};
}

export async function getFeaturedCategories() {
  const categories = await Promise.all(
    FEATURED_CATEGORIES.map(async category => {
      const products = await productsBase("On site")
        .select({
          filterByFormula: `FIND("${category.id}", category) > 0`,
          maxRecords: 6,
          sort: [{ field: "created", direction: "desc" }]
        })
        .all();
      return {
        ...category,
        products: await Promise.all(
          products.map(product => parseProductResult(product))
        )
      };
    })
  );

  return categories;
}

export async function parseProductResult(res, withComments = false) {
  let comments = withComments ? [] : 0;
  if (res.get("comments")) {
    comments = withComments
      ? await parseCommentResults(res.get("comments"))
      : res.get("comments").length;
  }
  return {
    id: res.id,
    slug: res.get("slug"),
    name: res.get("name"),
    description: res.get("description"),
    cost: res.get("cost"),
    url: res.get("url"),
    icon: res.get("icon")[0].url,
    category: res.get("category"),
    comments: comments
  };
}

export async function createComment(id, name, content) {
  console.log(id, name, content);
  const createdComments = await productsBase("Comments").create([
    {
      fields: {
        product: [id],
        name: name,
        content: content
      }
    }
  ]);
  const res = await parseBareCommentResults(createdComments);
  return res[0];
}

export async function parseBareCommentResults(res) {
  return res.map(c => {
    return {
      name: c.get("name"),
      content: c.get("content")
    };
  });
}

export async function parseCommentResults(res) {
  return await Promise.all(
    res.map(async c_res => {
      const comment = await productsBase("Comments").find(c_res);
      return {
        name: comment.get("name"),
        content: comment.get("content")
      };
    })
  );
}

export async function getProduct(slug) {
  const res = await productsBase("On site")
    .select({
      filterByFormula: `{slug} = "${slug.toLowerCase()}"`
    })
    .all();
  return await parseProductResult(res[0], true);
}

export function parseRawAirbaseProduct(records) {
  return records.map(r => ({
    id: r.id,
    slug: r.fields.slug,
    name: r.fields.name,
    description: r.fields.description,
    cost: r.fields.cost,
    url: r.fields.url,
    icon: r.fields.icon ? r.fields.icon[0].url : "",
    category: r.fields.category,
    comments: r.fields.comments ? r.fields.comments.length : 0
  }));
}

export async function getForCategory(categoryId, offset = null) {
  let url = `https://api.airtable.com/v0/appw5TtXrtMTh6wzv/On%20site?filterByFormula={category}="${categoryId}"`;

  if (offset) {
    url += `&offset=${offset}`;
  }

  const { data } = await axios.get(url, {
    headers: { Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}` }
  });

  return {
    ...data,
    records: parseRawAirbaseProduct(data.records)
  };
}