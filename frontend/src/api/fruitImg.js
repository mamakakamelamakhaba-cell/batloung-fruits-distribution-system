// Centralised fruit-image resolver.
// Maps a fruit name (case-insensitive) to its local public image path.
// Falls back to strawberry.jpg for unknown fruits.

const FRUIT_IMAGE_MAP = [
  { keywords: ['apple'],      path: '/images/apple.jpg'      },
  { keywords: ['banana'],     path: '/images/banana.jpg'     },
  { keywords: ['orange'],     path: '/images/orange.jpg'     },
  { keywords: ['grape'],      path: '/images/grapes.jpg'     },
  { keywords: ['mango'],      path: '/images/mango.jpg'      },
  { keywords: ['avocado'],    path: '/images/avocado.jpg'    },
  { keywords: ['watermelon'], path: '/images/watermelon.jpg' },
  { keywords: ['pineapple'],  path: '/images/pineapple.jpg'  },
  { keywords: ['strawberry'], path: '/images/strawberry.jpg' },
  { keywords: ['lemon'],      path: '/images/lemon.jpg'      },
  { keywords: ['peach'],      path: '/images/peach.jpg'      },
  { keywords: ['pear'],       path: '/images/pear.jpg'       },
  { keywords: ['plum'],       path: '/images/plum.jpg'       },
  { keywords: ['pomegranate'],path: '/images/pomegranate.jpg'},
  { keywords: ['litchi','lychee'], path: '/images/lemon.jpg' },
  { keywords: ['cherry'],     path: '/images/strawberry.jpg' },
];

export const fruitImg = (name) => {
  if (!name) return '/images/strawberry.jpg';
  const n = name.toLowerCase();
  for (const entry of FRUIT_IMAGE_MAP) {
    if (entry.keywords.some(k => n.includes(k))) return entry.path;
  }
  return '/images/strawberry.jpg';
};

export default fruitImg;
