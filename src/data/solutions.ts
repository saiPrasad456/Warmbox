import type { Solution } from '../types'

export const solutions: Solution[] = [
  {
    id: 's1',
    slug: 'ready-to-cook',
    title: 'Ready to Cook',
    tagline: 'For brands packaging meals that need heat, not a kitchen.',
    description:
      'Food brands can pair ready-to-cook meal formats with a built-in self-heating container, so the customer\u2019s last step is a pull-string instead of a stove.',
    useCases: [
      'Meal-kit and D2C food brands',
      'Regional and ethnic ready-meal lines',
      'Retail and modern-trade packaged meals',
    ],
    applicationIds: ['a1', 'a3'],
    image: '[IMAGE — READY TO COOK]',
  },
  {
    id: 's2',
    slug: 'heat-and-eat',
    title: 'Heat & Eat Food',
    tagline: 'Hot food anywhere, without a microwave in sight.',
    description:
      'For pre-cooked and frozen meal formats, a self-heating container replaces the microwave step entirely \u2014 useful anywhere reheating equipment is inconvenient or unavailable.',
    useCases: ['Travel and transit meals', 'Camping and outdoor use', 'Hostel, dorm, and shared-kitchen settings'],
    applicationIds: ['a2', 'a4'],
    image: '[IMAGE — HEAT AND EAT]',
  },
  {
    id: 's3',
    slug: 'food-delivery',
    title: 'Food Delivery',
    tagline: 'A hot-on-arrival option for delivery and cloud kitchens.',
    description:
      'Delivery time works against hot food. A self-heating format lets the customer activate heating on arrival, so the meal is hot at the moment it\u2019s eaten \u2014 not at the moment it left the kitchen.',
    useCases: ['Cloud kitchens and delivery-first brands', 'Long-distance or cold-chain delivery routes', 'Catering and event food service'],
    applicationIds: ['a8'],
    image: '[IMAGE — FOOD DELIVERY]',
  },
  {
    id: 's4',
    slug: 'defence-forces',
    title: 'Defence Forces',
    tagline: 'Field-ready heating with no power, flame, or equipment.',
    description:
      'In field conditions without fixed kitchen infrastructure, a compact, flameless, self-heating ration format offers a hot meal without a stove, fuel, or electricity supply.',
    useCases: ['Field rations and forward postings', 'Disaster-response and relief operations', 'Remote-site and expedition teams'],
    applicationIds: ['a5', 'a6', 'a7'],
    image: '[IMAGE — DEFENCE FORCES]',
  },
]
