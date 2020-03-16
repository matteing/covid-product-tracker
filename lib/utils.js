export const FEATURED_CATEGORIES = [
  {
    id: "education-resources",
    name: "Trackers and information 🗞",
    description: "Stay informed and understand the crisis"
  },
  {
    id: "remote-work",
    name: "Remote work tools 💻",
    description: "Go remote with the best tools from the tech industry"
  },
  {
    id: "physical-services",
    name: "Find services IRL 🌎",
    description: "Essential services that you can book online"
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
