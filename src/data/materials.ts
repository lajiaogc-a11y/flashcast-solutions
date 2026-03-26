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

export const materialsData: MaterialCategory[] = [
  {
    name: "Flooring",
    slug: "flooring",
    description: "Vinyl, laminate, engineered wood, and SPC flooring options for every space.",
    items: [
      { id: "floor-1", name: "SPC Vinyl Flooring - Natural Oak", slug: "spc-vinyl-natural-oak", category: "Flooring", type: "SPC Vinyl", color: "Natural Oak", texture: "Wood Grain", suitableSpaces: ["Living Room", "Bedroom", "Study"], recommendedPairing: "Pairs well with light-colored walls and warm wood furniture", description: "Premium SPC vinyl plank with realistic wood grain texture. Waterproof, durable, and easy to maintain. 4mm thickness with 0.3mm wear layer.", note: "Minimum order: 500 sqft. Installation available.", image: spcVinylImg },
      { id: "floor-2", name: "Laminate Flooring - Grey Stone", slug: "laminate-grey-stone", category: "Flooring", type: "Laminate", color: "Grey", texture: "Stone Pattern", suitableSpaces: ["Living Room", "Office", "Commercial"], recommendedPairing: "Complements minimalist and industrial interiors", description: "12mm laminate with stone-pattern surface. AC4 rating for commercial use. Click-lock installation system.", note: "Available in 8mm and 12mm options.", image: laminateGreyImg },
      { id: "floor-3", name: "Engineered Wood - Walnut Herringbone", slug: "engineered-walnut-herringbone", category: "Flooring", type: "Engineered Wood", color: "Walnut", texture: "Herringbone", suitableSpaces: ["Living Room", "Dining Room", "Master Bedroom"], recommendedPairing: "Ideal for classic and luxury interiors", description: "Multi-layer engineered wood with genuine walnut veneer. Herringbone pattern for an elegant, timeless look.", note: "Professional installation recommended for herringbone pattern.", image: walnutHerringboneImg },
      { id: "floor-4", name: "Vinyl Plank - Ash Grey", slug: "vinyl-plank-ash-grey", category: "Flooring", type: "Vinyl Plank", color: "Ash Grey", texture: "Wood Grain", suitableSpaces: ["Bedroom", "Living Room", "Office"], recommendedPairing: "Works well with white and grey interiors", description: "2mm self-adhesive vinyl plank. Budget-friendly option with good visual impact. Easy DIY installation.", note: "Not recommended for wet areas.", image: vinylAshGreyImg },
    ],
  },
  {
    name: "Tiles",
    slug: "tiles",
    description: "Porcelain, ceramic, and marble-look tiles for floors, walls, and feature areas.",
    items: [
      { id: "tile-1", name: "Porcelain Tile 60x60 - Carrara White", slug: "porcelain-carrara-white", category: "Tiles", type: "Porcelain", color: "Carrara White", texture: "Marble Look", suitableSpaces: ["Living Room", "Bathroom", "Kitchen"], recommendedPairing: "Classic choice for clean, bright interiors", description: "60x60cm polished porcelain tile with Carrara marble veining. Suitable for floor and wall applications.", note: "Available in 30x60, 60x60, and 60x120 sizes.", image: carraraWhiteImg },
      { id: "tile-2", name: "Subway Tile - White Glossy", slug: "subway-tile-white", category: "Tiles", type: "Ceramic", color: "White", texture: "Glossy", suitableSpaces: ["Kitchen Backsplash", "Bathroom Wall"], recommendedPairing: "Timeless design for kitchen and bathroom walls", description: "Classic 75x150mm white glossy subway tile. Beveled edge for a traditional look.", note: "Sold per box (1 sqm). Grout not included.", image: subwayWhiteImg },
      { id: "tile-3", name: "Hexagon Tile - Grey Matte", slug: "hexagon-grey-matte", category: "Tiles", type: "Porcelain", color: "Grey", texture: "Matte", suitableSpaces: ["Bathroom Floor", "Feature Wall", "Entryway"], recommendedPairing: "Great for adding visual interest to bathrooms", description: "Hexagonal porcelain tile in matte grey finish. 200mm across. Anti-slip surface.", note: "Professional installation recommended for hexagon pattern.", image: hexagonGreyImg },
    ],
  },
  {
    name: "Doors",
    slug: "doors",
    description: "Solid, semi-solid, laminate, and glass panel doors for every room.",
    items: [
      { id: "door-1", name: "Solid Timber Door - Walnut", slug: "solid-timber-walnut", category: "Doors", type: "Solid Timber", color: "Walnut", texture: "Wood Grain", suitableSpaces: ["Main Entrance", "Bedroom", "Study"], recommendedPairing: "Best for main entrances and master bedrooms", description: "Premium solid timber door in walnut finish. 40mm thickness. Includes door frame and hinges.", note: "Custom sizes available. Lead time: 2-3 weeks.", image: solidWalnutImg },
      { id: "door-2", name: "Laminate Door - White Oak", slug: "laminate-door-white-oak", category: "Doors", type: "Laminate", color: "White Oak", texture: "Smooth", suitableSpaces: ["Bedroom", "Bathroom", "Store Room"], recommendedPairing: "Budget-friendly choice for interior doors", description: "Semi-solid core door with laminate finish. 35mm thickness. Lightweight and durable.", note: "Standard sizes in stock. Custom sizes: 2-week lead time.", image: laminateDoorImg },
      { id: "door-3", name: "Barn Door - Dark Wood", slug: "barn-door-dark-wood", category: "Doors", type: "Sliding Barn", color: "Dark Wood", texture: "Rustic", suitableSpaces: ["Kitchen", "Study", "Walk-In Wardrobe"], recommendedPairing: "Space-saving sliding option with rustic charm", description: "Sliding barn door with exposed rail hardware. Solid wood construction with dark stain finish.", note: "Rail hardware included. Wall-mounted installation.", image: barnDoorImg },
    ],
  },
  {
    name: "Glass Doors",
    slug: "glass-doors",
    description: "Sliding, bi-fold, and swing glass doors for modern living and commercial spaces.",
    items: [
      { id: "glass-1", name: "Aluminium Sliding Door - Black Frame", slug: "aluminium-sliding-black", category: "Glass Doors", type: "Sliding", color: "Black Frame", texture: "Clear Glass", suitableSpaces: ["Balcony", "Kitchen", "Patio"], recommendedPairing: "Modern choice for open-concept living", description: "Aluminium frame sliding door with 8mm tempered clear glass. Powder-coated black frame. Smooth sliding mechanism.", note: "Custom sizes available. Includes installation.", image: aluminiumSlidingImg },
      { id: "glass-2", name: "Frameless Glass Door - Clear", slug: "frameless-glass-clear", category: "Glass Doors", type: "Swing", color: "Clear", texture: "Tempered", suitableSpaces: ["Shower", "Office Partition", "Shop Entrance"], recommendedPairing: "Minimalist look for modern spaces", description: "10mm frameless tempered glass door. Floor spring or patch fitting. Suitable for shower screens and office partitions.", note: "Safety glass certified. Multiple fitting options.", image: framelessGlassImg },
    ],
  },
  {
    name: "Cabinets",
    slug: "cabinets",
    description: "Kitchen cabinets, wardrobes, and custom storage in various finishes and materials.",
    items: [
      { id: "cab-1", name: "Melamine Cabinet - Grey Oak", slug: "melamine-grey-oak", category: "Cabinets", type: "Melamine", color: "Grey Oak", texture: "Wood Grain", suitableSpaces: ["Kitchen", "Wardrobe", "Bathroom"], recommendedPairing: "Versatile, durable, and cost-effective", description: "18mm melamine-faced particleboard with wood grain texture. Soft-close hinges and drawer runners. Wide range of colors available.", note: "Most popular choice. Fast production time.", image: melamineGreyImg },
      { id: "cab-2", name: "Acrylic Cabinet - High Gloss White", slug: "acrylic-high-gloss-white", category: "Cabinets", type: "Acrylic", color: "White", texture: "High Gloss", suitableSpaces: ["Kitchen", "TV Console", "Display Cabinet"], recommendedPairing: "Premium look for modern, sleek interiors", description: "High-gloss acrylic panel on MDF core. Mirror-like finish. Fingerprint-resistant coating.", note: "Premium option. Slightly longer production time.", image: acrylicWhiteImg },
      { id: "cab-3", name: "Solid Wood Cabinet - Teak", slug: "solid-wood-teak", category: "Cabinets", type: "Solid Wood", color: "Teak", texture: "Natural", suitableSpaces: ["Kitchen", "Wardrobe", "Study"], recommendedPairing: "Timeless natural wood for classic interiors", description: "Genuine teak solid wood cabinet with natural finish. Hand-crafted construction with dovetail joints.", note: "Highest quality option. Custom orders only.", image: solidTeakImg },
    ],
  },
  {
    name: "Boards & Panels",
    slug: "boards-panels",
    description: "Feature wall panels, timber cladding, and decorative boards for walls and ceilings.",
    items: [
      { id: "panel-1", name: "Fluted Panel - Charcoal", slug: "fluted-panel-charcoal", category: "Boards & Panels", type: "MDF Fluted", color: "Charcoal", texture: "Ribbed", suitableSpaces: ["Feature Wall", "TV Background", "Bedroom"], recommendedPairing: "Creates depth and texture on feature walls", description: "MDF fluted panel with PVC film finish. 2400x600mm per panel. Easy tongue-and-groove installation.", note: "Minimum order: 4 panels. Paint-grade and film options available.", image: flutedCharcoalImg },
      { id: "panel-2", name: "Timber Cladding - Oak", slug: "timber-cladding-oak", category: "Boards & Panels", type: "Timber", color: "Oak", texture: "Natural Wood", suitableSpaces: ["Feature Wall", "Ceiling", "Staircase"], recommendedPairing: "Adds warmth and natural beauty to any space", description: "Solid timber cladding strips in oak finish. 90x12mm strips. Tongue-and-groove connection.", note: "Natural wood variation in grain and color. Sealed with protective coating.", image: timberOakImg },
    ],
  },
];
