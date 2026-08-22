import type { CompatibleFood } from '../types'

export const compatibleFoods: CompatibleFood[] = [
  { id: 'cf1', title: 'Rice & Biryani', examples: 'Steamed rice, pulao, biryani' },
  { id: 'cf2', title: 'Curries & Gravies', examples: 'Dal, paneer, chicken curry' },
  { id: 'cf3', title: 'Soups & Broths', examples: 'Vegetable, tomato, clear soups' },
  { id: 'cf4', title: 'Ready-to-Eat Meals', examples: 'Packaged and pre-cooked meals' },
  { id: 'cf5', title: 'Snacks & Sides', examples: 'Thepla, parathas, cutlets' },
  { id: 'cf6', title: 'Beverages', examples: 'Milk, soups, cup noodles' },
]

// NOTE: verify food-safety and heating guidance with the product/quality team
// before publishing — this list is a starting structure, not a claim about
// what has been tested.
