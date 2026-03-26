import { MaterialCategory } from "./types";

import spcVinylImg from "@/assets/materials/spc-vinyl-natural-oak.jpg";
import laminateGreyImg from "@/assets/materials/laminate-grey-stone.jpg";
import walnutHerringboneImg from "@/assets/materials/engineered-walnut-herringbone.jpg";
import vinylAshGreyImg from "@/assets/materials/vinyl-plank-ash-grey.jpg";
import carraraWhiteImg from "@/assets/materials/porcelain-carrara-white.jpg";
import subwayWhiteImg from "@/assets/materials/subway-tile-white.jpg";
import hexagonGreyImg from "@/assets/materials/hexagon-grey-matte.jpg";
import solidWalnutImg from "@/assets/materials/solid-timber-walnut.jpg";
import laminateDoorImg from "@/assets/materials/laminate-door-white-oak.jpg";
import barnDoorImg from "@/assets/materials/barn-door-dark-wood.jpg";
import aluminiumSlidingImg from "@/assets/materials/aluminium-sliding-black.jpg";
import framelessGlassImg from "@/assets/materials/frameless-glass-clear.jpg";
import melamineGreyImg from "@/assets/materials/melamine-grey-oak.jpg";
import acrylicWhiteImg from "@/assets/materials/acrylic-high-gloss-white.jpg";
import solidTeakImg from "@/assets/materials/solid-wood-teak.jpg";
import flutedCharcoalImg from "@/assets/materials/fluted-panel-charcoal.jpg";
import timberOakImg from "@/assets/materials/timber-cladding-oak.jpg";

import wholeHouseImg from "@/assets/category-whole-house-custom.jpg";
import furnitureImg from "@/assets/category-furniture.jpg";
import bathroomImg from "@/assets/category-bathroom.jpg";
import flooringImg from "@/assets/category-flooring.jpg";
import doorsWindowsImg from "@/assets/category-doors-windows.jpg";
import wallPanelsImg from "@/assets/category-wall-panels.jpg";
import artPaintImg from "@/assets/category-art-paint.jpg";

export const materialsData: MaterialCategory[] = [
  {
    name: "Whole House Custom",
    nameZh: "全屋定制",
    slug: "whole-house-custom",
    description: "Custom-built kitchen cabinets, wardrobes, TV consoles, and storage solutions tailored to your space.",
    image: wholeHouseImg,
    subcategories: [
      { name: "Kitchen Cabinets", nameZh: "厨柜", slug: "kitchen-cabinets", description: "Custom kitchen cabinets in melamine, acrylic, and solid wood finishes.", image: melamineGreyImg },
      { name: "Wardrobes", nameZh: "衣柜", slug: "wardrobes", description: "Built-in and walk-in wardrobes with modern sliding or swing doors.", image: acrylicWhiteImg },
      { name: "TV Cabinets", nameZh: "电视柜", slug: "tv-cabinets", description: "Wall-mounted and floor-standing TV consoles with cable management.", image: solidTeakImg },
      { name: "Shoe Cabinets", nameZh: "鞋柜", slug: "shoe-cabinets", description: "Entryway shoe storage cabinets in various sizes and styles.", image: melamineGreyImg },
      { name: "Storage Cabinets", nameZh: "储物柜", slug: "storage-cabinets", description: "Multi-purpose storage solutions for every room.", image: acrylicWhiteImg },
      { name: "Walk-in Wardrobe", nameZh: "步入式衣帽间", slug: "walk-in-wardrobe", description: "Luxurious walk-in closet systems with custom organizers.", image: solidTeakImg },
      { name: "Study Desk", nameZh: "书桌", slug: "study-desk", description: "Built-in study desks and workstations for home offices.", image: melamineGreyImg },
    ],
    items: [
      { id: "cab-1", name: "Melamine Cabinet - Grey Oak", slug: "melamine-grey-oak", category: "Whole House Custom", subcategory: "kitchen-cabinets", type: "Melamine", color: "Grey Oak", texture: "Wood Grain", suitableSpaces: ["Kitchen", "Wardrobe", "Bathroom"], recommendedPairing: "Versatile, durable, and cost-effective", description: "18mm melamine-faced particleboard with wood grain texture. Soft-close hinges and drawer runners.", note: "Most popular choice. Fast production time.", image: melamineGreyImg },
      { id: "cab-2", name: "Acrylic Cabinet - High Gloss White", slug: "acrylic-high-gloss-white", category: "Whole House Custom", subcategory: "kitchen-cabinets", type: "Acrylic", color: "White", texture: "High Gloss", suitableSpaces: ["Kitchen", "TV Console", "Display Cabinet"], recommendedPairing: "Premium look for modern, sleek interiors", description: "High-gloss acrylic panel on MDF core. Mirror-like finish. Fingerprint-resistant coating.", note: "Premium option. Slightly longer production time.", image: acrylicWhiteImg },
      { id: "cab-3", name: "Solid Wood Cabinet - Teak", slug: "solid-wood-teak", category: "Whole House Custom", subcategory: "wardrobes", type: "Solid Wood", color: "Teak", texture: "Natural", suitableSpaces: ["Kitchen", "Wardrobe", "Study"], recommendedPairing: "Timeless natural wood for classic interiors", description: "Genuine teak solid wood cabinet with natural finish. Hand-crafted construction with dovetail joints.", note: "Highest quality option. Custom orders only.", image: solidTeakImg },
    ],
  },
  {
    name: "Furniture",
    nameZh: "家具",
    slug: "furniture",
    description: "Sofas, beds, dining tables, and accent furniture to complete your renovation.",
    image: furnitureImg,
    subcategories: [
      { name: "Sofa", nameZh: "沙发", slug: "sofa", description: "Modern and classic sofas in fabric, leather, and velvet.", image: furnitureImg },
      { name: "Bed", nameZh: "床", slug: "bed", description: "Platform beds, storage beds, and bed frames in various styles.", image: furnitureImg },
      { name: "Coffee Table", nameZh: "茶几", slug: "coffee-table", description: "Marble, wood, and glass coffee tables for your living room.", image: furnitureImg },
      { name: "Dining Table", nameZh: "餐桌", slug: "dining-table", description: "Dining tables for 4 to 10 seaters in solid wood and sintered stone.", image: furnitureImg },
      { name: "Chairs", nameZh: "椅子", slug: "chairs", description: "Dining chairs, accent chairs, and office chairs.", image: furnitureImg },
      { name: "Side Table", nameZh: "边桌", slug: "side-table", description: "Bedside tables and accent side tables.", image: furnitureImg },
    ],
    items: [],
  },
  {
    name: "Bathroom",
    nameZh: "卫浴",
    slug: "bathroom",
    description: "Bathtubs, basins, toilets, shower systems, and bathroom vanities for a complete bathroom renovation.",
    image: bathroomImg,
    subcategories: [
      { name: "Bathtub", nameZh: "浴缸", slug: "bathtub", description: "Freestanding and built-in bathtubs in acrylic and stone.", image: bathroomImg },
      { name: "Basin", nameZh: "洗手盆", slug: "basin", description: "Counter-top, under-mount, and wall-hung basins.", image: carraraWhiteImg },
      { name: "Toilet", nameZh: "马桶", slug: "toilet", description: "Wall-hung and floor-mounted toilets with soft-close seats.", image: bathroomImg },
      { name: "Shower System", nameZh: "花洒系统", slug: "shower-system", description: "Rain showers, handheld showers, and thermostatic shower sets.", image: bathroomImg },
      { name: "Bathroom Cabinet", nameZh: "浴室柜", slug: "bathroom-cabinet", description: "Vanity cabinets with mirror and storage for bathrooms.", image: melamineGreyImg },
    ],
    items: [
      { id: "tile-1", name: "Porcelain Tile 60x60 - Carrara White", slug: "porcelain-carrara-white", category: "Bathroom", subcategory: "basin", type: "Porcelain", color: "Carrara White", texture: "Marble Look", suitableSpaces: ["Living Room", "Bathroom", "Kitchen"], recommendedPairing: "Classic choice for clean, bright interiors", description: "60x60cm polished porcelain tile with Carrara marble veining.", note: "Available in 30x60, 60x60, and 60x120 sizes.", image: carraraWhiteImg },
      { id: "tile-2", name: "Subway Tile - White Glossy", slug: "subway-tile-white", category: "Bathroom", subcategory: "bathroom-cabinet", type: "Ceramic", color: "White", texture: "Glossy", suitableSpaces: ["Kitchen Backsplash", "Bathroom Wall"], recommendedPairing: "Timeless design for kitchen and bathroom walls", description: "Classic 75x150mm white glossy subway tile.", note: "Sold per box (1 sqm). Grout not included.", image: subwayWhiteImg },
      { id: "tile-3", name: "Hexagon Tile - Grey Matte", slug: "hexagon-grey-matte", category: "Bathroom", subcategory: "bathtub", type: "Porcelain", color: "Grey", texture: "Matte", suitableSpaces: ["Bathroom Floor", "Feature Wall", "Entryway"], recommendedPairing: "Great for adding visual interest to bathrooms", description: "Hexagonal porcelain tile in matte grey finish.", note: "Professional installation recommended.", image: hexagonGreyImg },
    ],
  },
  {
    name: "Flooring",
    nameZh: "地面",
    slug: "flooring",
    description: "SPC vinyl, laminate, engineered wood, and vinyl plank flooring for every space.",
    image: flooringImg,
    subcategories: [
      { name: "SPC Vinyl", nameZh: "SPC石塑地板", slug: "spc-vinyl", description: "Waterproof SPC vinyl planks with realistic wood grain textures.", image: spcVinylImg },
      { name: "Laminate", nameZh: "强化地板", slug: "laminate", description: "Durable laminate flooring in wood and stone patterns.", image: laminateGreyImg },
      { name: "Engineered Wood", nameZh: "实木复合地板", slug: "engineered-wood", description: "Premium engineered wood with genuine hardwood veneer.", image: walnutHerringboneImg },
      { name: "Vinyl Plank", nameZh: "乙烯基地板", slug: "vinyl-plank", description: "Budget-friendly vinyl plank flooring with easy installation.", image: vinylAshGreyImg },
    ],
    items: [
      { id: "floor-1", name: "SPC Vinyl Flooring - Natural Oak", slug: "spc-vinyl-natural-oak", category: "Flooring", subcategory: "spc-vinyl", type: "SPC Vinyl", color: "Natural Oak", texture: "Wood Grain", suitableSpaces: ["Living Room", "Bedroom", "Study"], recommendedPairing: "Pairs well with light-colored walls and warm wood furniture", description: "Premium SPC vinyl plank with realistic wood grain texture. Waterproof, durable, and easy to maintain.", note: "Minimum order: 500 sqft. Installation available.", image: spcVinylImg },
      { id: "floor-2", name: "Laminate Flooring - Grey Stone", slug: "laminate-grey-stone", category: "Flooring", subcategory: "laminate", type: "Laminate", color: "Grey", texture: "Stone Pattern", suitableSpaces: ["Living Room", "Office", "Commercial"], recommendedPairing: "Complements minimalist and industrial interiors", description: "12mm laminate with stone-pattern surface. AC4 rating for commercial use.", note: "Available in 8mm and 12mm options.", image: laminateGreyImg },
      { id: "floor-3", name: "Engineered Wood - Walnut Herringbone", slug: "engineered-walnut-herringbone", category: "Flooring", subcategory: "engineered-wood", type: "Engineered Wood", color: "Walnut", texture: "Herringbone", suitableSpaces: ["Living Room", "Dining Room", "Master Bedroom"], recommendedPairing: "Ideal for classic and luxury interiors", description: "Multi-layer engineered wood with genuine walnut veneer. Herringbone pattern.", note: "Professional installation recommended.", image: walnutHerringboneImg },
      { id: "floor-4", name: "Vinyl Plank - Ash Grey", slug: "vinyl-plank-ash-grey", category: "Flooring", subcategory: "vinyl-plank", type: "Vinyl Plank", color: "Ash Grey", texture: "Wood Grain", suitableSpaces: ["Bedroom", "Living Room", "Office"], recommendedPairing: "Works well with white and grey interiors", description: "2mm self-adhesive vinyl plank. Budget-friendly option.", note: "Not recommended for wet areas.", image: vinylAshGreyImg },
    ],
  },
  {
    name: "Doors & Windows",
    nameZh: "门窗",
    slug: "doors-windows",
    description: "Solid timber, laminate, barn, aluminium sliding, and frameless glass doors for every room.",
    image: doorsWindowsImg,
    subcategories: [
      { name: "Solid Timber Door", nameZh: "实木门", slug: "solid-timber-door", description: "Premium solid timber doors in walnut, oak, and teak finishes.", image: solidWalnutImg },
      { name: "Laminate Door", nameZh: "强化门", slug: "laminate-door", description: "Budget-friendly laminate doors for bedrooms and bathrooms.", image: laminateDoorImg },
      { name: "Barn Door", nameZh: "谷仓门", slug: "barn-door", description: "Sliding barn doors with exposed rail hardware.", image: barnDoorImg },
      { name: "Aluminium Sliding Door", nameZh: "铝合金推拉门", slug: "aluminium-sliding-door", description: "Modern aluminium frame sliding doors with tempered glass.", image: aluminiumSlidingImg },
      { name: "Frameless Glass Door", nameZh: "无框玻璃门", slug: "frameless-glass-door", description: "Minimalist frameless glass doors for showers and partitions.", image: framelessGlassImg },
    ],
    items: [
      { id: "door-1", name: "Solid Timber Door - Walnut", slug: "solid-timber-walnut", category: "Doors & Windows", subcategory: "solid-timber-door", type: "Solid Timber", color: "Walnut", texture: "Wood Grain", suitableSpaces: ["Main Entrance", "Bedroom", "Study"], recommendedPairing: "Best for main entrances and master bedrooms", description: "Premium solid timber door in walnut finish. 40mm thickness.", note: "Custom sizes available. Lead time: 2-3 weeks.", image: solidWalnutImg },
      { id: "door-2", name: "Laminate Door - White Oak", slug: "laminate-door-white-oak", category: "Doors & Windows", subcategory: "laminate-door", type: "Laminate", color: "White Oak", texture: "Smooth", suitableSpaces: ["Bedroom", "Bathroom", "Store Room"], recommendedPairing: "Budget-friendly choice for interior doors", description: "Semi-solid core door with laminate finish. 35mm thickness.", note: "Standard sizes in stock. Custom sizes: 2-week lead time.", image: laminateDoorImg },
      { id: "door-3", name: "Barn Door - Dark Wood", slug: "barn-door-dark-wood", category: "Doors & Windows", subcategory: "barn-door", type: "Sliding Barn", color: "Dark Wood", texture: "Rustic", suitableSpaces: ["Kitchen", "Study", "Walk-In Wardrobe"], recommendedPairing: "Space-saving sliding option with rustic charm", description: "Sliding barn door with exposed rail hardware. Solid wood construction.", note: "Rail hardware included. Wall-mounted installation.", image: barnDoorImg },
      { id: "glass-1", name: "Aluminium Sliding Door - Black Frame", slug: "aluminium-sliding-black", category: "Doors & Windows", subcategory: "aluminium-sliding-door", type: "Sliding", color: "Black Frame", texture: "Clear Glass", suitableSpaces: ["Balcony", "Kitchen", "Patio"], recommendedPairing: "Modern choice for open-concept living", description: "Aluminium frame sliding door with 8mm tempered clear glass.", note: "Custom sizes available. Includes installation.", image: aluminiumSlidingImg },
      { id: "glass-2", name: "Frameless Glass Door - Clear", slug: "frameless-glass-clear", category: "Doors & Windows", subcategory: "frameless-glass-door", type: "Swing", color: "Clear", texture: "Tempered", suitableSpaces: ["Shower", "Office Partition", "Shop Entrance"], recommendedPairing: "Minimalist look for modern spaces", description: "10mm frameless tempered glass door. Floor spring or patch fitting.", note: "Safety glass certified. Multiple fitting options.", image: framelessGlassImg },
    ],
  },
  {
    name: "Wall & Panels",
    nameZh: "墙面与板材",
    slug: "wall-panels",
    description: "Fluted panels, timber cladding, feature wall tiles, and decorative wall panels.",
    image: wallPanelsImg,
    subcategories: [
      { name: "Fluted Panel", nameZh: "格栅板", slug: "fluted-panel", description: "MDF fluted panels with ribbed texture for feature walls.", image: flutedCharcoalImg },
      { name: "Timber Cladding", nameZh: "木饰面", slug: "timber-cladding", description: "Solid timber cladding strips for walls and ceilings.", image: timberOakImg },
      { name: "Feature Wall Tile", nameZh: "背景墙砖", slug: "feature-wall-tile", description: "Decorative tiles for TV walls, dining walls, and entryways.", image: carraraWhiteImg },
      { name: "Wall Panel", nameZh: "护墙板", slug: "wall-panel", description: "PVC and WPC wall panels for easy installation and maintenance.", image: flutedCharcoalImg },
    ],
    items: [
      { id: "panel-1", name: "Fluted Panel - Charcoal", slug: "fluted-panel-charcoal", category: "Wall & Panels", subcategory: "fluted-panel", type: "MDF Fluted", color: "Charcoal", texture: "Ribbed", suitableSpaces: ["Feature Wall", "TV Background", "Bedroom"], recommendedPairing: "Creates depth and texture on feature walls", description: "MDF fluted panel with PVC film finish. 2400x600mm per panel.", note: "Minimum order: 4 panels.", image: flutedCharcoalImg },
      { id: "panel-2", name: "Timber Cladding - Oak", slug: "timber-cladding-oak", category: "Wall & Panels", subcategory: "timber-cladding", type: "Timber", color: "Oak", texture: "Natural Wood", suitableSpaces: ["Feature Wall", "Ceiling", "Staircase"], recommendedPairing: "Adds warmth and natural beauty to any space", description: "Solid timber cladding strips in oak finish. 90x12mm strips.", note: "Natural wood variation in grain and color.", image: timberOakImg },
    ],
  },
  {
    name: "Art Paint",
    nameZh: "艺术涂料",
    slug: "art-paint",
    description: "Premium decorative art paint and textured plaster finishes for feature walls, ceilings, and luxury interiors.",
    image: artPaintImg,
    subcategories: [
      { name: "Venetian Plaster", nameZh: "威尼斯灰泥", slug: "venetian-plaster", description: "Classic Italian-style polished plaster with marble-like depth and sheen.", image: artPaintImg },
      { name: "Microcement", nameZh: "微水泥", slug: "microcement", description: "Ultra-thin cement coating for seamless industrial-modern surfaces.", image: artPaintImg },
      { name: "Metallic Paint", nameZh: "金属漆", slug: "metallic-paint", description: "Shimmer and metallic effect paints for luxurious accent walls.", image: artPaintImg },
      { name: "Texture Paint", nameZh: "肌理漆", slug: "texture-paint", description: "Sand, stone, and fabric texture finishes for unique wall effects.", image: artPaintImg },
      { name: "Lime Wash", nameZh: "石灰涂料", slug: "lime-wash", description: "Natural lime-based wash with soft, organic color variations.", image: artPaintImg },
    ],
    items: [],
  },
];
