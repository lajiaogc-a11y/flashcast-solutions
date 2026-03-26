

## 重构 Materials 页面：从材料展示升级为客户选款系统

### 概述
将当前工程化的6个分类（Flooring, Tiles, Doors, Glass Doors, Cabinets, Boards & Panels）重构为以客户视角组织的6个一级分类，每个含子分类，形成两级浏览结构。

### 新分类结构

```text
Whole House Custom（全屋定制）
├── Kitchen Cabinets
├── Wardrobes
├── TV Cabinets
├── Shoe Cabinets
├── Storage Cabinets
├── Walk-in Wardrobe
└── Study Desk

Furniture（家具）
├── Sofa
├── Bed
├── Coffee Table
├── Dining Table
├── Chairs
└── Side Table

Bathroom（卫浴）
├── Bathtub
├── Basin
├── Toilet
├── Shower System
└── Bathroom Cabinet

Flooring（地面）
├── SPC Vinyl
├── Laminate
├── Engineered Wood
└── Vinyl Plank

Doors & Windows（门窗）
├── Solid Timber Door
├── Laminate Door
├── Barn Door
├── Aluminium Sliding Door
└── Frameless Glass Door

Wall & Panels（墙面与板材）
├── Fluted Panel
├── Timber Cladding
├── Feature Wall Tile
└── Wall Panel
```

### 文件变更

**1. 修改 `src/data/types.ts`**
- `MaterialCategory` 新增 `subcategories` 字段：`{ name: string; slug: string; description: string; image: string }[]`
- `items` 保留，每个 item 新增 `subcategory: string` 字段关联子分类

**2. 重写 `src/data/materials.ts`**
- 6个新一级分类，每个包含子分类列表和对应的 material items
- 现有 Flooring/Doors 等数据迁移到新分类下
- 新分类（Whole House Custom, Furniture, Bathroom）使用 placeholder 图片（复用现有 assets）

**3. 重写 `src/pages/Materials.tsx`** — 一级分类展示页
- Hero banner 保留
- 用卡片网格展示6个一级分类（桌面3列，移动端2列）
- 每张卡片：分类图片 + 中英文名称 + 子分类数量提示
- 点击进入 `/materials/category/:slug`

**4. 重写 `src/pages/MaterialCategoryPage.tsx`** — 子分类展示页
- 顶部显示一级分类名称和描述
- 子分类卡片网格（桌面4列，移动端横向滑动 snap scroll）
- 每张卡片：图片 + 子分类名称
- 点击进入 `/materials/category/:categorySlug/:subcategorySlug`（或直接展示该子分类下的 items）

**5. 新建 `src/pages/MaterialSubcategoryPage.tsx`** — 子分类详情页
- 展示该子分类下所有 material items
- 卡片网格布局，复用现有 item 卡片样式
- 点击进入 `/materials/:slug` 单品详情页

**6. 修改 `src/App.tsx`**
- 新增路由 `/materials/category/:categorySlug/:subcategorySlug` → `MaterialSubcategoryPage`

**7. 更新 `src/components/sections/MaterialsSection.tsx`**（首页区块）
- 展示6个新一级分类缩略图，替换当前的6个旧分类

**8. `src/pages/MaterialDetail.tsx`**
- 更新面包屑路径适配新的三级结构：Materials → Category → Subcategory → Item

### 设计要求
- 卡片式设计：圆角、阴影、hover 放大效果
- 移动端子分类支持横向 snap scroll
- 中英文双语标题（如 "全屋定制 Whole House Custom"）
- 视觉统一：所有卡片尺寸比例一致

