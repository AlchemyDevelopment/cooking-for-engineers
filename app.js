/**
 * Cooking for Engineers — Tabular Recipe Studio
 * Core Application Engine & Table Grid Compiler
 */

(function () {
  'use strict';

  // ============================================================================
  // Default & Preset Recipes
  // ============================================================================

  const PRESETS = {
    brownies: {
      id: "brownies",
      title: "Chu's Famous Fudge Brownies",
      category: "baking",
      yield: "16 squares (8x8 pan)",
      source: "Michael Chu / Cooking for Engineers",
      description: "Dense, rich, intensely chocolate brownies with a fresh brewed espresso kick.",
      prepSteps: [
        "Butter and flour an 8x8-in pan",
        "Preheat oven to 350° F (170° C)"
      ],
      ingredients: [
        { id: "ing_1", name: "unsalted butter", amount: 4, unit: "oz", metricAmount: 115, metricUnit: "g", rawText: "4 oz (115 g) unsalted butter" },
        { id: "ing_2", name: "sugar", amount: 1, unit: "cup", metricAmount: 200, metricUnit: "g", rawText: "1 cup (200 g) sugar" },
        { id: "ing_3", name: "vanilla extract", amount: 0.25, unit: "tsp.", metricAmount: 2.5, metricUnit: "mL", rawText: "1/4 tsp. (2.5 mL) vanilla extract" },
        { id: "ing_4", name: "fresh brewed espresso or very strong coffee", amount: 1, unit: "shot", customText: "1 shot (4 Tbs; 60 mL) fresh brewed espresso or very strong coffee", rawText: "1 shot (4 Tbs; 60 mL) fresh brewed espresso or very strong coffee" },
        { id: "ing_5", name: "eggs", amount: 2, unit: "large", metricAmount: 100, metricUnit: "g", rawText: "2 large (100 g) eggs" },
        { id: "ing_6", name: "all-purpose flour", amount: 0.5, unit: "cup", metricAmount: 80, metricUnit: "g", rawText: "1/2 cup (80 g) all-purpose flour" },
        { id: "ing_7", name: "Hershey's cocoa powder", amount: 0.333, unit: "cup", metricAmount: 80, metricUnit: "g", rawText: "1/3 cup (80 g) Hershey's cocoa powder" },
        { id: "ing_8", name: "baking soda", amount: 0.25, unit: "tsp.", metricAmount: 1.3, metricUnit: "g", rawText: "1/4 tsp. (1.3 g) baking soda" },
        { id: "ing_9", name: "table salt", amount: 0.25, unit: "tsp.", metricAmount: 1.5, metricUnit: "g", rawText: "1/4 tsp. (1.5 g) table salt" }
      ],
      actions: [
        { id: "act_1", action: "melt", startRow: 0, endRow: 0, col: 1 },
        { id: "act_2", action: "mix", startRow: 0, endRow: 3, col: 2 },
        { id: "act_3", action: "mix", startRow: 0, endRow: 4, col: 3 },
        { id: "act_4", action: "fold in", startRow: 0, endRow: 8, col: 4 },
        { id: "act_5", action: "bake", temp: "350° F (170° C)", time: "30 to 40 min", startRow: 0, endRow: 8, col: 5 }
      ]
    },

    "japanese-curry": {
      id: "japanese-curry",
      title: "Instant Pot Japanese Curry",
      category: "mains",
      yield: "6 servings (or 3 batches / 1500g)",
      source: "Just One Cookbook / Alchemy Kitchen",
      description: "Comforting Japanese curry prepared in a pressure cooker with tender chicken, potatoes, and rich velvety gravy.",
      prepSteps: [
        "Peel & slice carrots and onions; cut Yukon potatoes into bite-sized chunks",
        "Mince garlic and finely grate fresh ginger",
        "Cut chicken thighs into bite-sized pieces and season with salt & pepper"
      ],
      ingredients: [
        { id: "jc_1", name: "neutral-flavored oil", amount: 1, unit: "TBSP", metricAmount: 15, metricUnit: "mL", rawText: "1 TBSP (15 mL) neutral-flavored oil" },
        { id: "jc_2", name: "yellow onions, sliced", amount: 3, unit: "medium", metricAmount: 450, metricUnit: "g", rawText: "3 medium (450 g) yellow onions, sliced" },
        { id: "jc_3", name: "garlic, minced", amount: 2, unit: "tsp.", metricAmount: 10, metricUnit: "g", rawText: "2 tsp. (10 g) minced garlic" },
        { id: "jc_4", name: "fresh ginger, finely grated", amount: 1, unit: "tsp.", metricAmount: 5, metricUnit: "g", rawText: "1 tsp. (5 g) grated fresh ginger" },
        { id: "jc_5", name: "boneless, skinless chicken thighs, bite-sized", amount: 1.5, unit: "lbs", metricAmount: 680, metricUnit: "g", rawText: "1.5 lbs (680 g) chicken thighs" },
        { id: "jc_6", name: "kosher salt", amount: 0.125, unit: "tsp.", metricAmount: 0.8, metricUnit: "g", rawText: "1/8 tsp. (0.8 g) kosher salt" },
        { id: "jc_7", name: "freshly ground black pepper", amount: 0.125, unit: "tsp.", metricAmount: 0.3, metricUnit: "g", rawText: "1/8 tsp. (0.3 g) black pepper" },
        { id: "jc_8", name: "carrots, sliced diagonally", amount: 1.5, unit: "medium", metricAmount: 200, metricUnit: "g", rawText: "1.5 medium (200 g) carrots, sliced" },
        { id: "jc_9", name: "Yukon gold potatoes, chunked", amount: 3, unit: "medium", metricAmount: 450, metricUnit: "g", rawText: "3 medium (450 g) Yukon gold potatoes" },
        { id: "jc_10", name: "chicken stock or broth", amount: 3, unit: "cups", metricAmount: 710, metricUnit: "mL", rawText: "3 cups (710 mL) chicken broth" },
        { id: "jc_11", name: "Japanese curry roux blocks", amount: 1, unit: "pack", metricAmount: 200, metricUnit: "g", rawText: "1 pack (200 g) curry roux blocks" },
        { id: "jc_12", name: "ketchup", amount: 1, unit: "TBSP", metricAmount: 15, metricUnit: "mL", rawText: "1 TBSP (15 mL) ketchup" },
        { id: "jc_13", name: "soy sauce", amount: 1, unit: "TBSP", metricAmount: 15, metricUnit: "mL", rawText: "1 TBSP (15 mL) soy sauce" }
      ],
      actions: [
        { id: "jc_act1", action: "sauté", notes: "Sauté mode until fragrant", startRow: 0, endRow: 3, col: 1 },
        { id: "jc_act2", action: "sauté chicken", notes: "coat with oil & aromatics", startRow: 0, endRow: 6, col: 2 },
        { id: "jc_act3", action: "mix well", notes: "distribute vegetables", startRow: 0, endRow: 8, col: 3 },
        { id: "jc_act4", action: "pressure cook", temp: "High (Meat/Stew)", time: "15 min + QR/NR", notes: "Press down in broth. Place roux on top. DO NOT MIX!", startRow: 0, endRow: 10, col: 4 },
        { id: "jc_act5", action: "simmer & dissolve", notes: "Sauté mode ~5 min until roux is fully dissolved", startRow: 0, endRow: 12, col: 5 },
        { id: "jc_act6", action: "serve", notes: "over steamed Japanese rice or noodles", startRow: 0, endRow: 12, col: 6 }
      ]
    },

    "mojo-pork": {
      id: "mojo-pork",
      title: "Authentic Cuban Mojo Pork & Cubano Sandwich",
      category: "mains",
      yield: "8 to 10 sandwiches",
      source: "Traditional Cuban / Alchemy Kitchen",
      description: "Citrus-garlic marinated slow-roasted pork shoulder layered with ham, Swiss, pickles, and mustard on toasted plancha bread.",
      prepSteps: [
        "Brine pork shoulder for 12 hours (OJ, water, spiced rum, salt, sugar & herbs); pat dry",
        "Prepare Mojo marinade and marinate pork shoulder for at least 2 hours"
      ],
      ingredients: [
        { id: "mp_1", name: "pork shoulder (bone-in or boneless)", amount: 6, unit: "lbs", metricAmount: 2.7, metricUnit: "kg", rawText: "6 lbs (2.7 kg) pork shoulder" },
        { id: "mp_2", name: "extra virgin olive oil", amount: 0.666, unit: "cup", metricAmount: 160, metricUnit: "mL", rawText: "2/3 cup (160 mL) olive oil" },
        { id: "mp_3", name: "fresh cilantro, finely chopped", amount: 0.666, unit: "cup", metricAmount: 30, metricUnit: "g", rawText: "2/3 cup (30 g) chopped cilantro" },
        { id: "mp_4", name: "fresh mint leaves, chopped", amount: 4, unit: "TBSP", metricAmount: 15, metricUnit: "g", rawText: "4 TBSP (15 g) fresh mint" },
        { id: "mp_5", name: "fresh orange juice", amount: 0.5, unit: "cup", metricAmount: 120, metricUnit: "mL", rawText: "1/2 cup (120 mL) orange juice" },
        { id: "mp_6", name: "fresh squeezed lime juice", amount: 0.5, unit: "cup", metricAmount: 120, metricUnit: "mL", rawText: "1/2 cup (120 mL) lime juice" },
        { id: "mp_7", name: "garlic cloves, minced", amount: 7, unit: "cloves", metricAmount: 30, metricUnit: "g", rawText: "7 cloves (30 g) garlic, minced" },
        { id: "mp_8", name: "grated orange zest", amount: 1.5, unit: "TBSP", metricAmount: 9, metricUnit: "g", rawText: "1 1/2 TBSP (9 g) orange zest" },
        { id: "mp_9", name: "fresh oregano, chopped", amount: 2, unit: "tsp.", metricAmount: 4, metricUnit: "g", rawText: "2 tsp. (4 g) fresh oregano" },
        { id: "mp_10", name: "ground cumin", amount: 1, unit: "tsp.", metricAmount: 3, metricUnit: "g", rawText: "1 tsp. (3 g) ground cumin" },
        { id: "mp_11", name: "freshly ground black pepper", amount: 0.666, unit: "tsp.", metricAmount: 2, metricUnit: "g", rawText: "2/3 tsp. (2 g) black pepper" },
        { id: "mp_12", name: "fine sea salt", amount: 0.666, unit: "tsp.", metricAmount: 4, metricUnit: "g", rawText: "2/3 tsp. (4 g) sea salt" },
        { id: "mp_13", name: "baguettes or Cuban bread (~9 in)", amount: 4, unit: "loaves", metricAmount: 4, metricUnit: "loaves", rawText: "4 loaves Cuban bread (~9 in)" },
        { id: "mp_14", name: "American yellow mustard", amount: 0.5, unit: "cup", metricAmount: 120, metricUnit: "mL", rawText: "1/2 cup (120 mL) yellow mustard" },
        { id: "mp_15", name: "Swiss cheese slices", amount: 0.5, unit: "lb", metricAmount: 225, metricUnit: "g", rawText: "1/2 lb (225 g) Swiss cheese" },
        { id: "mp_16", name: "dill pickles, sliced lengthwise", amount: 2, unit: "cups", metricAmount: 300, metricUnit: "g", rawText: "2 cups (300 g) dill pickles" },
        { id: "mp_17", name: "sliced deli ham", amount: 1, unit: "lb", metricAmount: 450, metricUnit: "g", rawText: "1 lb (450 g) sliced ham" },
        { id: "mp_18", name: "butter (for bread & plancha)", amount: 0.5, unit: "cup", metricAmount: 115, metricUnit: "g", rawText: "1/2 cup (115 g) butter" }
      ],
      actions: [
        { id: "mp_act1", action: "whisk marinade", notes: "combine citrus & aromatics", startRow: 1, endRow: 11, col: 1 },
        { id: "mp_act2", action: "slow roast", temp: "300° F (150° C)", time: "until 170° F internal", notes: "baste with marinade throughout", startRow: 0, endRow: 11, col: 2 },
        { id: "mp_act3", action: "rest & slice", notes: "cool, thinly slice & grill", startRow: 0, endRow: 11, col: 3 },
        { id: "mp_act4", action: "layer sandwich", notes: "pork + ham + swiss + pickles + mustard", startRow: 0, endRow: 16, col: 4 },
        { id: "mp_act5", action: "butter & press", notes: "heated plancha until golden & melted", startRow: 0, endRow: 17, col: 5 }
      ]
    },

    "bbq-sauce": {
      id: "bbq-sauce",
      title: "Apple BBQ Sauce",
      category: "sauces",
      yield: "~2 cups (480 mL)",
      source: "Alchemy Smokehouse",
      description: "Sweet, tangy apple barbecue sauce balanced with cider vinegar, brown sugar, and spirits.",
      prepSteps: [
        "Measure ingredients into a medium heavy-bottomed saucepan"
      ],
      ingredients: [
        { id: "bbq_1", name: "ketchup", amount: 1, unit: "cup", metricAmount: 240, metricUnit: "mL", rawText: "1 cup (240 mL) ketchup" },
        { id: "bbq_2", name: "apple juice", amount: 0.5, unit: "cup", metricAmount: 120, metricUnit: "mL", rawText: "1/2 cup (120 mL) apple juice" },
        { id: "bbq_3", name: "apple cider vinegar", amount: 1, unit: "tsp.", metricAmount: 5, metricUnit: "mL", rawText: "1 tsp. (5 mL) apple cider vinegar" },
        { id: "bbq_4", name: "brown sugar", amount: 0.25, unit: "cup", metricAmount: 50, metricUnit: "g", rawText: "1/4 cup (50 g) brown sugar" },
        { id: "bbq_5", name: "spirits of choice (bourbon or spiced rum)", amount: 0.25, unit: "cup", metricAmount: 60, metricUnit: "mL", rawText: "1/4 cup (60 mL) bourbon or rum" },
        { id: "bbq_6", name: "onion powder", amount: 1, unit: "tsp.", metricAmount: 3, metricUnit: "g", rawText: "1 tsp. (3 g) onion powder" },
        { id: "bbq_7", name: "garlic powder", amount: 1, unit: "tsp.", metricAmount: 3, metricUnit: "g", rawText: "1 tsp. (3 g) garlic powder" },
        { id: "bbq_8", name: "black pepper", amount: 1, unit: "tsp.", metricAmount: 2, metricUnit: "g", rawText: "1 tsp. (2 g) black pepper" },
        { id: "bbq_9", name: "dried oregano", amount: 1, unit: "tsp.", metricAmount: 1, metricUnit: "g", rawText: "1 tsp. (1 g) dried oregano" }
      ],
      actions: [
        { id: "bbq_act1", action: "whisk", notes: "liquids & brown sugar", startRow: 0, endRow: 4, col: 1 },
        { id: "bbq_act2", action: "blend in", notes: "spices", startRow: 0, endRow: 8, col: 2 },
        { id: "bbq_act3", action: "simmer on low", time: "15 to 20 min", notes: "stir occasionally until glossy & thickened", startRow: 0, endRow: 8, col: 3 }
      ]
    },

    "pickled-onions": {
      id: "pickled-onions",
      title: "Quick Pickled Red Onions",
      category: "sauces",
      yield: "1 pint mason jar (480 mL)",
      source: "Alchemy Kitchen",
      description: "Crisp, vibrant pink pickled onions. Perfect topping for tacos, cubano sandwiches, burgers, and bowls.",
      prepSteps: [
        "Sterilize a 1-pint glass mason jar with boiling water"
      ],
      ingredients: [
        { id: "po_1", name: "apple cider vinegar", amount: 0.5, unit: "cup", metricAmount: 120, metricUnit: "mL", rawText: "1/2 cup (120 mL) apple cider vinegar" },
        { id: "po_2", name: "water", amount: 1, unit: "cup", metricAmount: 240, metricUnit: "mL", rawText: "1 cup (240 mL) water" },
        { id: "po_3", name: "granulated sugar", amount: 2, unit: "TBSP", metricAmount: 25, metricUnit: "g", rawText: "2 TBSP (25 g) sugar" },
        { id: "po_4", name: "kosher salt", amount: 1.5, unit: "tsp.", metricAmount: 9, metricUnit: "g", rawText: "1 1/2 tsp. (9 g) kosher salt" },
        { id: "po_5", name: "whole black peppercorns", amount: 8, unit: "whole", metricAmount: 1, metricUnit: "g", rawText: "8 whole (1 g) black peppercorns" },
        { id: "po_6", name: "medium red onion, thinly sliced into semi-circles", amount: 1, unit: "medium", metricAmount: 150, metricUnit: "g", rawText: "1 medium (150 g) red onion, sliced" },
        { id: "po_7", name: "boiling water (for blanching)", amount: 4, unit: "cups", metricAmount: 950, metricUnit: "mL", rawText: "4 cups (950 mL) boiling water" }
      ],
      actions: [
        { id: "po_act1", action: "stir to dissolve", notes: "stir vinegar, water, sugar, salt & pepper in small bowl", startRow: 0, endRow: 4, col: 1 },
        { id: "po_act2", action: "scald & drain", time: "sit 1 min", notes: "cover sliced onions in boiling water, then drain well", startRow: 5, endRow: 6, col: 1 },
        { id: "po_act3", action: "pack in jar & pour brine", notes: "pack warm onions into mason jar & cover with brine", startRow: 0, endRow: 6, col: 2 },
        { id: "po_act4", action: "seal & refrigerate", time: "chill 24+ hrs", notes: "great after 3 days", startRow: 0, endRow: 6, col: 3 }
      ]
    },

    "choc-chip-cookies": {
      id: "choc-chip-cookies",
      title: "Ultimate Chocolate Chip Cookies",
      category: "baking",
      yield: "24 cookies",
      source: "Cooking for Engineers / Alchemy",
      description: "Crisp golden edges, soft chewy center, with balanced dark chocolate chunks.",
      prepSteps: [
        "Line 2 large baking sheets with parchment paper",
        "Preheat oven to 375° F (190° C)"
      ],
      ingredients: [
        { id: "cc_1", name: "all-purpose flour", amount: 2.25, unit: "cups", metricAmount: 280, metricUnit: "g", rawText: "2 1/4 cups (280 g) all-purpose flour" },
        { id: "cc_2", name: "baking soda", amount: 1, unit: "tsp.", metricAmount: 5, metricUnit: "g", rawText: "1 tsp. (5 g) baking soda" },
        { id: "cc_3", name: "fine sea salt", amount: 1, unit: "tsp.", metricAmount: 5, metricUnit: "g", rawText: "1 tsp. (5 g) fine sea salt" },
        { id: "cc_4", name: "unsalted butter, softened", amount: 1, unit: "cup", metricAmount: 225, metricUnit: "g", rawText: "1 cup (225 g) unsalted butter, softened" },
        { id: "cc_5", name: "granulated white sugar", amount: 0.75, unit: "cup", metricAmount: 150, metricUnit: "g", rawText: "3/4 cup (150 g) granulated white sugar" },
        { id: "cc_6", name: "packed light brown sugar", amount: 0.75, unit: "cup", metricAmount: 165, metricUnit: "g", rawText: "3/4 cup (165 g) packed brown sugar" },
        { id: "cc_7", name: "large eggs", amount: 2, unit: "large", metricAmount: 100, metricUnit: "g", rawText: "2 large (100 g) eggs" },
        { id: "cc_8", name: "pure vanilla extract", amount: 2, unit: "tsp.", metricAmount: 10, metricUnit: "mL", rawText: "2 tsp. (10 mL) pure vanilla extract" },
        { id: "cc_9", name: "semi-sweet chocolate chips", amount: 2, unit: "cups", metricAmount: 340, metricUnit: "g", rawText: "2 cups (340 g) chocolate chips" }
      ],
      actions: [
        { id: "cc_act1", action: "whisk", notes: "dry mix", startRow: 0, endRow: 2, col: 1 },
        { id: "cc_act2", action: "cream", notes: "2 min light & fluffy", startRow: 3, endRow: 5, col: 1 },
        { id: "cc_act3", action: "beat in", notes: "one at a time", startRow: 3, endRow: 7, col: 2 },
        { id: "cc_act4", action: "stir in", notes: "just combined", startRow: 0, endRow: 7, col: 3 },
        { id: "cc_act5", action: "fold in", startRow: 0, endRow: 8, col: 4 },
        { id: "cc_act6", action: "bake", temp: "375° F (190° C)", time: "9 to 11 min", startRow: 0, endRow: 8, col: 5 }
      ]
    },

    carbonara: {
      id: "carbonara",
      title: "Authentic Spaghetti alla Carbonara",
      category: "mains",
      yield: "4 servings",
      source: "Traditional Roman / Culinary Engineering",
      description: "No cream, no peas. Just guanciale, pecorino, eggs, black pepper, and pasta water.",
      prepSteps: [
        "Bring 4 quarts of water to a boil with 2 Tbs salt"
      ],
      ingredients: [
        { id: "cb_1", name: "guanciale or thick pancetta, cubed", amount: 7, unit: "oz", metricAmount: 200, metricUnit: "g", rawText: "7 oz (200 g) guanciale, cubed" },
        { id: "cb_2", name: "spaghetti or rigatoni", amount: 1, unit: "lb", metricAmount: 450, metricUnit: "g", rawText: "1 lb (450 g) spaghetti" },
        { id: "cb_3", name: "egg yolks", amount: 4, unit: "large", metricAmount: 70, metricUnit: "g", rawText: "4 large (70 g) egg yolks" },
        { id: "cb_4", name: "whole egg", amount: 1, unit: "large", metricAmount: 50, metricUnit: "g", rawText: "1 large (50 g) whole egg" },
        { id: "cb_5", name: "finely grated Pecorino Romano", amount: 1, unit: "cup", metricAmount: 100, metricUnit: "g", rawText: "1 cup (100 g) Pecorino Romano" },
        { id: "cb_6", name: "freshly cracked black pepper", amount: 1, unit: "Tbs", metricAmount: 8, metricUnit: "g", rawText: "1 Tbs (8 g) coarse black pepper" }
      ],
      actions: [
        { id: "cb_act1", action: "crisp in skillet", time: "8 to 10 min", notes: "medium-low heat", startRow: 0, endRow: 0, col: 1 },
        { id: "cb_act2", action: "boil al dente", time: "9 min", notes: "save 1 cup water", startRow: 1, endRow: 1, col: 1 },
        { id: "cb_act3", action: "whisk", notes: "thick paste", startRow: 2, endRow: 5, col: 1 },
        { id: "cb_act4", action: "toss off-heat", notes: "emulsify with pasta water", startRow: 0, endRow: 5, col: 2 },
        { id: "cb_act5", action: "serve immediately", notes: "extra pecorino & pepper", startRow: 0, endRow: 5, col: 3 }
      ]
    },

    pancakes: {
      id: "pancakes",
      title: "Fluffy Buttermilk Pancakes",
      category: "breakfast",
      yield: "12 pancakes",
      source: "Cooking for Engineers Standard",
      description: "Tender, airy pancakes with golden browned rings.",
      prepSteps: [
        "Preheat griddle or cast iron skillet to 375° F (190° C)"
      ],
      ingredients: [
        { id: "pc_1", name: "all-purpose flour", amount: 2, unit: "cups", metricAmount: 250, metricUnit: "g", rawText: "2 cups (250 g) all-purpose flour" },
        { id: "pc_2", name: "granulated sugar", amount: 2, unit: "Tbs", metricAmount: 25, metricUnit: "g", rawText: "2 Tbs (25 g) granulated sugar" },
        { id: "pc_3", name: "baking powder", amount: 2, unit: "tsp.", metricAmount: 10, metricUnit: "g", rawText: "2 tsp. (10 g) baking powder" },
        { id: "pc_4", name: "baking soda", amount: 0.5, unit: "tsp.", metricAmount: 2.5, metricUnit: "g", rawText: "1/2 tsp. (2.5 g) baking soda" },
        { id: "pc_5", name: "kosher salt", amount: 0.5, unit: "tsp.", metricAmount: 3, metricUnit: "g", rawText: "1/2 tsp. (3 g) kosher salt" },
        { id: "pc_6", name: "buttermilk", amount: 2, unit: "cups", metricAmount: 480, metricUnit: "mL", rawText: "2 cups (480 mL) buttermilk" },
        { id: "pc_7", name: "unsalted butter, melted", amount: 4, unit: "Tbs", metricAmount: 60, metricUnit: "g", rawText: "4 Tbs (60 g) unsalted butter, melted" },
        { id: "pc_8", name: "large eggs", amount: 2, unit: "large", metricAmount: 100, metricUnit: "g", rawText: "2 large (100 g) eggs" },
        { id: "pc_9", name: "vanilla extract", amount: 1, unit: "tsp.", metricAmount: 5, metricUnit: "mL", rawText: "1 tsp. (5 mL) vanilla extract" }
      ],
      actions: [
        { id: "pc_act1", action: "whisk", notes: "dry bowl", startRow: 0, endRow: 4, col: 1 },
        { id: "pc_act2", action: "whisk", notes: "wet bowl", startRow: 5, endRow: 8, col: 1 },
        { id: "pc_act3", action: "gently combine", notes: "leave lumps, don't overmix", startRow: 0, endRow: 8, col: 2 },
        { id: "pc_act4", action: "rest", time: "10 min", startRow: 0, endRow: 8, col: 3 },
        { id: "pc_act5", action: "griddle cook", temp: "375° F (190° C)", time: "2 min per side", notes: "flip when bubbles pop", startRow: 0, endRow: 8, col: 4 }
      ]
    },

    "pizza-dough": {
      id: "pizza-dough",
      title: "72-Hour Fermented Pizza Dough",
      category: "baking",
      yield: "4 dough balls (280g each, 12-inch pizzas)",
      source: "Culinary Engineering Lab",
      description: "65% hydration Neapolitan-style dough with airy cornicione and leopard spotting.",
      prepSteps: [
        "Sterilize workstation & prepare proofing containers"
      ],
      ingredients: [
        { id: "pz_1", name: "tipo '00' flour or bread flour", amount: 4.8, unit: "cups", metricAmount: 680, metricUnit: "g", rawText: "4.8 cups (680 g) tipo '00' flour" },
        { id: "pz_2", name: "cool water (65°F / 18°C)", amount: 1.85, unit: "cups", metricAmount: 442, metricUnit: "g", rawText: "1.85 cups (442 g) cool water" },
        { id: "pz_3", name: "fine sea salt", amount: 1, unit: "Tbs", metricAmount: 18, metricUnit: "g", rawText: "1 Tbs (18 g) fine sea salt" },
        { id: "pz_4", name: "instant dry yeast", amount: 0.5, unit: "tsp.", metricAmount: 1.5, metricUnit: "g", rawText: "1/2 tsp. (1.5 g) instant yeast" },
        { id: "pz_5", name: "extra virgin olive oil", amount: 1, unit: "Tbs", metricAmount: 14, metricUnit: "g", rawText: "1 Tbs (14 g) olive oil" }
      ],
      actions: [
        { id: "pz_act1", action: "autolyse", time: "30 min", notes: "rough mix, cover", startRow: 0, endRow: 1, col: 1 },
        { id: "pz_act2", action: "knead", time: "8 min", notes: "until smooth & elastic", startRow: 0, endRow: 4, col: 2 },
        { id: "pz_act3", action: "bulk ferment", time: "2 hours room temp", startRow: 0, endRow: 4, col: 3 },
        { id: "pz_act4", action: "cold ferment", time: "48 to 72 hours", temp: "38° F (3° C)", startRow: 0, endRow: 4, col: 4 },
        { id: "pz_act5", action: "ball & rest", time: "2 hours at room temp", startRow: 0, endRow: 4, col: 5 },
        { id: "pz_act6", action: "stretch & bake", temp: "500° F (260° C) or pizza oven", time: "5 to 7 min", startRow: 0, endRow: 4, col: 6 }
      ]
    },

    "v60-coffee": {
      id: "v60-coffee",
      title: "Engineer's V60 Pour Over Coffee",
      category: "beverages",
      yield: "1 large mug (300 mL)",
      source: "CFE Extraction Protocol",
      description: "1:15 ratio single-origin pour over targeting 20% extraction yield.",
      prepSteps: [
        "Rinse paper filter with 100 mL boiling water & discard rinse",
        "Heat water to 205° F (96° C)"
      ],
      ingredients: [
        { id: "v60_1", name: "specialty coffee beans (medium-fine grind)", amount: 20, unit: "g", metricAmount: 20, metricUnit: "g", rawText: "20 g specialty whole beans (medium-fine)" },
        { id: "v60_2", name: "water (bloom phase)", amount: 60, unit: "g", metricAmount: 60, metricUnit: "mL", rawText: "60 g water at 205° F (96° C)" },
        { id: "v60_3", name: "water (main pour 1)", amount: 120, unit: "g", metricAmount: 120, metricUnit: "mL", rawText: "120 g water at 205° F (96° C)" },
        { id: "v60_4", name: "water (main pour 2)", amount: 120, unit: "g", metricAmount: 120, metricUnit: "mL", rawText: "120 g water at 205° F (96° C)" }
      ],
      actions: [
        { id: "v_act1", action: "grind & level", notes: "burr grinder", startRow: 0, endRow: 0, col: 1 },
        { id: "v_act2", action: "bloom & swirl", time: "45 sec", notes: "saturate all grounds", startRow: 0, endRow: 1, col: 2 },
        { id: "v_act3", action: "spiral pour", time: "30 sec", notes: "pour to 180 g total", startRow: 0, endRow: 2, col: 3 },
        { id: "v_act4", action: "center pour & swirl", time: "finish drawdown by 3:00 min", notes: "total 300 g water", startRow: 0, endRow: 3, col: 4 }
      ]
    }
  };

  // ============================================================================
  // Custom Recipes Storage (localStorage)
  // ============================================================================

  const STORAGE_KEY = 'cfe_custom_recipes';

  function getCustomRecipes() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error('Error reading custom recipes from storage:', e);
      return [];
    }
  }

  function saveCustomRecipe(recipe) {
    const custom = getCustomRecipes();
    if (!recipe.id) {
      recipe.id = 'custom_' + Date.now();
    }
    recipe.isCustom = true;
    const idx = custom.findIndex(r => r.id === recipe.id || (r.title && r.title.toLowerCase() === (recipe.title || '').toLowerCase()));
    if (idx >= 0) {
      custom[idx] = recipe;
    } else {
      custom.unshift(recipe);
    }
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(custom));
    } catch (e) {
      console.error('Error saving recipe to storage:', e);
    }
    updateRecipeCatalogUI();
  }

  function deleteCustomRecipe(id) {
    let custom = getCustomRecipes();
    custom = custom.filter(r => r.id !== id);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(custom));
    } catch (e) {
      console.error('Error deleting recipe:', e);
    }
    updateRecipeCatalogUI();
  }

  function getAllRecipes() {
    const list = [];
    for (const [key, preset] of Object.entries(PRESETS)) {
      list.push({ ...preset, key, isCustom: false });
    }
    const custom = getCustomRecipes();
    custom.forEach(c => {
      list.push({ ...c, key: c.id, isCustom: true });
    });
    return list;
  }

  // ============================================================================
  // Application State
  // ============================================================================

  const state = {
    view: 'cookbook', // 'cookbook' or 'studio'
    recipe: JSON.parse(JSON.stringify(PRESETS.brownies)),
    scale: 1.0,
    unitMode: 'dual',
    theme: 'classic',
    zoom: 1.0,
    kitchenMode: false,
    completedItems: new Set(),
    activeTimer: null,
    cookbookFilterCat: 'all',
    cookbookSearchTerm: '',
    isEditing: false
  };

  // ============================================================================
  // DOM Elements
  // ============================================================================

  const els = {
    // Views
    cookbookView: document.getElementById('cookbookView'),
    studioView: document.getElementById('studioView'),
    brandHomeLink: document.getElementById('brandHomeLink'),
    backToCookbookBtn: document.getElementById('backToCookbookBtn'),
    studioOnlyElements: document.querySelectorAll('.studio-only'),

    // Cookbook Landing Page Elements
    cookbookSearchInput: document.getElementById('cookbookSearchInput'),
    heroNewRecipeBtn: document.getElementById('heroNewRecipeBtn'),
    cookbookCatTabs: document.querySelectorAll('#cookbookCatTabs .hero-cat-tab'),
    cookbookGalleryGrid: document.getElementById('cookbookGalleryGrid'),

    // Header Controls
    presetSelect: document.getElementById('presetSelect'),
    themeSelect: document.getElementById('themeSelect'),
    scaleBtns: document.querySelectorAll('.scale-control-group .btn-pill'),
    unitBtns: document.querySelectorAll('.unit-control-group .btn-pill'),
    editModeBtn: document.getElementById('editModeBtn'),
    editModeBtnLabel: document.getElementById('editModeBtnLabel'),
    cookModeBtn: document.getElementById('cookModeBtn'),
    browseBtn: document.getElementById('browseBtn'),
    recipeCountBadge: document.getElementById('recipeCountBadge'),
    newRecipeBtn: document.getElementById('newRecipeBtn'),
    importBtn: document.getElementById('importBtn'),
    exportDropdownBtn: document.getElementById('exportDropdownBtn'),
    exportMenu: document.getElementById('exportMenu'),
    exportPngBtn: document.getElementById('exportPngBtn'),
    exportSvgBtn: document.getElementById('exportSvgBtn'),
    printBtn: document.getElementById('printBtn'),
    shareLinkBtn: document.getElementById('shareLinkBtn'),
    copyMarkdownBtn: document.getElementById('copyMarkdownBtn'),
    exportJsonBtn: document.getElementById('exportJsonBtn'),

    // Sidebar
    editorSidebar: document.getElementById('editorSidebar'),
    toggleSidebarBtn: document.getElementById('toggleSidebarBtn'),
    openSidebarFloatingBtn: document.getElementById('openSidebarFloatingBtn'),
    tabBtns: document.querySelectorAll('.sidebar-tabs .tab-btn'),
    tabPanels: document.querySelectorAll('.sidebar-content .tab-panel'),

    // Forms
    recipeTitle: document.getElementById('recipeTitle'),
    recipeYield: document.getElementById('recipeYield'),
    recipeSource: document.getElementById('recipeSource'),
    recipeDescription: document.getElementById('recipeDescription'),
    prepStepsContainer: document.getElementById('prepStepsContainer'),
    addPrepStepBtn: document.getElementById('addPrepStepBtn'),
    saveCurrentRecipeBtn: document.getElementById('saveCurrentRecipeBtn'),
    ingredientsListContainer: document.getElementById('ingredientsListContainer'),
    addIngredientBtn: document.getElementById('addIngredientBtn'),
    quickAddIngBtn: document.getElementById('quickAddIngBtn'),
    actionStepsContainer: document.getElementById('actionStepsContainer'),
    addActionStepBtn: document.getElementById('addActionStepBtn'),
    autoGroupBtn: document.getElementById('autoGroupBtn'),
    rawJsonEditor: document.getElementById('rawJsonEditor'),
    applyJsonBtn: document.getElementById('applyJsonBtn'),

    // Canvas & Preview
    previewViewport: document.getElementById('previewViewport'),
    recipeCardWrapper: document.getElementById('recipeCardWrapper'),
    cardTitle: document.getElementById('cardTitle'),
    cardYield: document.getElementById('cardYield'),
    cardSource: document.getElementById('cardSource'),
    cardScaleIndicator: document.getElementById('cardScaleIndicator'),
    canvasRecipeTitle: document.getElementById('canvasRecipeTitle'),
    cfeTable: document.getElementById('cfeTable'),
    zoomLevel: document.getElementById('zoomLevel'),
    zoomInBtn: document.getElementById('zoomInBtn'),
    zoomOutBtn: document.getElementById('zoomOutBtn'),
    zoomFitBtn: document.getElementById('zoomFitBtn'),

    // Kitchen Mode Timers
    kitchenActiveTimer: document.getElementById('kitchenActiveTimer'),
    activeTimerTime: document.getElementById('activeTimerTime'),
    stopActiveTimerBtn: document.getElementById('stopActiveTimerBtn'),

    // Create Recipe Modal
    createRecipeModal: document.getElementById('createRecipeModal'),
    closeCreateRecipeModalBtn: document.getElementById('closeCreateRecipeModalBtn'),
    cancelCreateRecipeBtn: document.getElementById('cancelCreateRecipeBtn'),
    submitCreateRecipeBtn: document.getElementById('submitCreateRecipeBtn'),
    newRecipeTitleInput: document.getElementById('newRecipeTitleInput'),
    newRecipeCategoryInput: document.getElementById('newRecipeCategoryInput'),
    newRecipeYieldInput: document.getElementById('newRecipeYieldInput'),
    newRecipeDescInput: document.getElementById('newRecipeDescInput'),
    newRecipePrepInput: document.getElementById('newRecipePrepInput'),
    newRecipeIngInput: document.getElementById('newRecipeIngInput'),
    newRecipeAutoFlow: document.getElementById('newRecipeAutoFlow'),

    // Import Modal
    importModal: document.getElementById('importModal'),
    importRecipeInput: document.getElementById('importRecipeInput'),
    closeImportModalBtn: document.getElementById('closeImportModalBtn'),
    cancelImportBtn: document.getElementById('cancelImportBtn'),
    processImportBtn: document.getElementById('processImportBtn'),

    // Quick Add Modal
    quickAddModal: document.getElementById('quickAddModal'),
    quickAddInput: document.getElementById('quickAddInput'),
    closeQuickAddModalBtn: document.getElementById('closeQuickAddModalBtn'),
    cancelQuickAddBtn: document.getElementById('cancelQuickAddBtn'),
    processQuickAddBtn: document.getElementById('processQuickAddBtn'),

    toastContainer: document.getElementById('toastContainer'),
    exportCanvas: document.getElementById('exportCanvas')
  };

  // ============================================================================
  // View Routing: Cookbook Home vs Studio
  // ============================================================================

  function setEditMode(enable) {
    state.isEditing = !!enable;
    if (state.isEditing) {
      els.editorSidebar.classList.remove('collapsed');
      if (els.editModeBtn) {
        els.editModeBtn.classList.add('active');
        if (els.editModeBtnLabel) els.editModeBtnLabel.textContent = 'Close Editor';
      }
      renderSidebar();
    } else {
      els.editorSidebar.classList.add('collapsed');
      if (els.editModeBtn) {
        els.editModeBtn.classList.remove('active');
        if (els.editModeBtnLabel) els.editModeBtnLabel.textContent = 'Edit Recipe';
      }
    }
  }

  function toggleEditMode() {
    setEditMode(els.editorSidebar.classList.contains('collapsed'));
  }

  function setView(viewName) {
    state.view = viewName;
    if (viewName === 'cookbook') {
      els.cookbookView.classList.remove('d-none');
      els.studioView.classList.add('d-none');
      els.studioOnlyElements.forEach(el => el.classList.add('d-none'));
      setEditMode(false);
      renderCookbookGallery(state.cookbookFilterCat, state.cookbookSearchTerm);
      window.scrollTo(0, 0);
    } else {
      els.cookbookView.classList.add('d-none');
      els.studioView.classList.remove('d-none');
      els.studioOnlyElements.forEach(el => el.classList.remove('d-none'));
      renderRecipeCard();
      if (state.isEditing) {
        renderSidebar();
      }
    }
  }

  function getCategoryEmoji(cat) {
    switch (cat) {
      case 'baking': return '🍰';
      case 'mains': return '🍛';
      case 'sauces': return '🥫';
      case 'breakfast': return '🥞';
      case 'beverages': return '☕';
      default: return '🍽️';
    }
  }

  // ============================================================================
  // Cookbook Landing Page Gallery Rendering
  // ============================================================================

  function renderCookbookGallery(category = 'all', searchQuery = '') {
    const all = getAllRecipes();
    const query = (searchQuery || '').trim().toLowerCase();

    const filtered = all.filter(r => {
      if (category === 'custom' && !r.isCustom) return false;
      if (category !== 'all' && category !== 'custom' && r.category !== category) return false;

      if (query) {
        const titleMatch = (r.title || '').toLowerCase().includes(query);
        const descMatch = (r.description || '').toLowerCase().includes(query);
        const sourceMatch = (r.source || '').toLowerCase().includes(query);
        const ingMatch = (r.ingredients || []).some(i => (i.name || '').toLowerCase().includes(query));
        return titleMatch || descMatch || sourceMatch || ingMatch;
      }
      return true;
    });

    if (filtered.length === 0) {
      els.cookbookGalleryGrid.innerHTML = `
        <div class="empty-browser-state">
          <div style="font-size: 3rem; margin-bottom: 0.5rem;">🔍</div>
          <h3>No matching recipes found</h3>
          <p class="form-help">Try clearing your search or switching categories, or click "+ Create Recipe" above.</p>
        </div>
      `;
      return;
    }

    let html = '';
    filtered.forEach(r => {
      const emoji = getCategoryEmoji(r.category);
      const ingsCount = (r.ingredients || []).length;
      const stepsCount = (r.actions || []).length;
      const isCustom = !!r.isCustom;

      html += `
        <div class="cookbook-card ${isCustom ? 'is-custom' : ''}" data-key="${r.key}" data-custom="${isCustom}">
          <div>
            <div class="card-top-row">
              <span class="card-cat-badge">${emoji} ${escapeHtml(r.category || 'Recipe')}</span>
              <span class="card-source-tag">${isCustom ? '⭐ Personal Recipe' : escapeHtml(truncate(r.source, 24))}</span>
            </div>
            <h3 class="card-recipe-title">${escapeHtml(r.title || 'Untitled')}</h3>
            <p class="card-recipe-desc">${escapeHtml(r.description || 'Structured Cooking for Engineers flowchart table.')}</p>
          </div>

          <div>
            <div class="card-metrics-row">
              <span>🌾 <strong>${ingsCount}</strong> ingredients</span>
              <span>•</span>
              <span>⚙️ <strong>${stepsCount}</strong> process steps</span>
              <span>•</span>
              <span>${escapeHtml(truncate(r.yield || 'Standard', 14))}</span>
            </div>

            <div class="card-actions-bar">
              <button type="button" class="btn btn-primary btn-sm btn-open-flowchart" data-action="open" data-key="${r.key}" data-custom="${isCustom}">
                Open Flowchart →
              </button>
              <button type="button" class="btn btn-secondary btn-sm" title="Fork / Duplicate recipe" data-action="fork" data-key="${r.key}" data-custom="${isCustom}">
                Fork
              </button>
              ${isCustom ? `
                <button type="button" class="btn btn-secondary btn-sm text-danger" title="Delete recipe" data-action="delete" data-id="${r.id}">
                  ✕
                </button>
              ` : ''}
            </div>
          </div>
        </div>
      `;
    });

    els.cookbookGalleryGrid.innerHTML = html;
  }

  function updateRecipeCatalogUI() {
    const all = getAllRecipes();
    if (els.recipeCountBadge) {
      els.recipeCountBadge.textContent = all.length;
    }

    if (els.presetSelect) {
      const currentTitle = state.recipe.title;
      let html = '<option value="" disabled selected>📖 Switch Recipe...</option>';

      html += '<optgroup label="⭐ Curated Presets">';
      for (const [key, preset] of Object.entries(PRESETS)) {
        const isSel = preset.title === currentTitle ? 'selected' : '';
        html += `<option value="preset:${key}" ${isSel}>${getCategoryEmoji(preset.category)} ${preset.title}</option>`;
      }
      html += '</optgroup>';

      const custom = getCustomRecipes();
      if (custom.length > 0) {
        html += '<optgroup label="💾 My Saved Recipes">';
        custom.forEach(c => {
          const isSel = c.title === currentTitle ? 'selected' : '';
          html += `<option value="custom:${c.id}" ${isSel}>⭐ ${escapeHtml(c.title)}</option>`;
        });
        html += '</optgroup>';
      }

      els.presetSelect.innerHTML = html;
    }

    if (state.view === 'cookbook') {
      renderCookbookGallery(state.cookbookFilterCat, state.cookbookSearchTerm);
    }
  }

  function openRecipeByKey(key, isCustom) {
    let target = null;
    if (isCustom) {
      const custom = getCustomRecipes();
      target = custom.find(r => r.id === key);
    } else {
      target = PRESETS[key];
    }

    if (target) {
      state.recipe = JSON.parse(JSON.stringify(target));
      state.completedItems.clear();
      setEditMode(false);
      setView('studio');
      updateRecipeCatalogUI();
      showToast(`Loaded ${target.title}!`);
    }
  }

  function forkRecipeByKey(key, isCustom) {
    let source = null;
    if (isCustom) {
      const custom = getCustomRecipes();
      source = custom.find(r => r.id === key);
    } else {
      source = PRESETS[key];
    }

    if (source) {
      const forked = JSON.parse(JSON.stringify(source));
      forked.id = 'custom_' + Date.now();
      forked.title = `${forked.title} (Copy)`;
      forked.isCustom = true;
      saveCustomRecipe(forked);
      state.recipe = forked;
      setView('studio');
      showToast(`Forked as "${forked.title}"!`);
    }
  }

  // ============================================================================
  // Fraction & Number Formatting
  // ============================================================================

  function formatFraction(val) {
    if (!val || isNaN(val)) return '';
    const rounded = Math.round(val * 100) / 100;
    const whole = Math.floor(rounded);
    const remainder = rounded - whole;

    const eps = 0.04;
    let frac = '';
    if (Math.abs(remainder - 0.25) < eps) frac = '1/4';
    else if (Math.abs(remainder - 0.333) < eps) frac = '1/3';
    else if (Math.abs(remainder - 0.5) < eps) frac = '1/2';
    else if (Math.abs(remainder - 0.666) < eps) frac = '2/3';
    else if (Math.abs(remainder - 0.75) < eps) frac = '3/4';
    else if (Math.abs(remainder - 0.125) < eps) frac = '1/8';
    else if (Math.abs(remainder) < eps) frac = '';
    else frac = remainder.toFixed(1).replace(/^0\./, '.');

    if (whole > 0 && frac) return `${whole} ${frac}`;
    if (whole > 0 && !frac) return `${whole}`;
    if (whole === 0 && frac) return frac;
    return val.toString();
  }

  function formatIngredientText(ing, scale, unitMode) {
    if (!ing) return '';

    if (ing.customText && scale === 1 && unitMode === 'dual') {
      return ing.customText;
    }

    const scaledUs = ing.amount ? ing.amount * scale : null;
    const scaledMetric = ing.metricAmount ? Math.round(ing.metricAmount * scale * 10) / 10 : null;

    const usStr = scaledUs ? `${formatFraction(scaledUs)} ${ing.unit || ''}`.trim() : '';
    const metricStr = scaledMetric ? `${scaledMetric} ${ing.metricUnit || ''}`.trim() : '';

    if (unitMode === 'us') {
      return usStr ? `${usStr} ${ing.name}`.trim() : ing.rawText || ing.name;
    }
    if (unitMode === 'metric') {
      return metricStr ? `${metricStr} ${ing.name}`.trim() : (usStr ? `${usStr} ${ing.name}` : ing.rawText || ing.name);
    }

    if (usStr && metricStr) {
      return `${usStr} (${metricStr}) ${ing.name}`.trim();
    }
    if (usStr) {
      return `${usStr} ${ing.name}`.trim();
    }
    return ing.rawText || ing.name || '';
  }

  // ============================================================================
  // Tabular Recipe Matrix Solver & Compiler
  // ============================================================================

  function compileRecipeTable(recipe, scale, unitMode) {
    const ingredients = recipe.ingredients || [];
    const actions = recipe.actions || [];
    const prepSteps = recipe.prepSteps || [];

    const numRows = ingredients.length;
    if (numRows === 0) {
      return '<tr><td style="padding: 2.5rem; text-align: center; color: var(--ui-text-muted);">No ingredients yet. Use the sidebar to add ingredients.</td></tr>';
    }

    let maxCol = 1;
    actions.forEach(a => {
      if (a.col && a.col > maxCol) maxCol = a.col;
    });

    const totalCols = maxCol + 1;
    const grid = Array.from({ length: numRows }, () => Array(totalCols).fill(null));

    // Place action blocks
    actions.forEach(act => {
      const col = act.col || 1;
      const startRow = Math.max(0, Math.min(numRows - 1, act.startRow !== undefined ? act.startRow : 0));
      const endRow = Math.max(startRow, Math.min(numRows - 1, act.endRow !== undefined ? act.endRow : startRow));
      const rowspan = endRow - startRow + 1;

      if (col < totalCols) {
        grid[startRow][col] = {
          type: 'action',
          data: act,
          rowspan: rowspan,
          colspan: 1
        };

        for (let r = startRow + 1; r <= endRow; r++) {
          grid[r][col] = { type: 'covered' };
        }
      }
    });

    // Place ingredients with colspan
    for (let r = 0; r < numRows; r++) {
      let firstActionCol = totalCols;
      for (let c = 1; c < totalCols; c++) {
        if (grid[r][c] !== null) {
          firstActionCol = c;
          break;
        }
      }

      const ingColspan = Math.max(1, firstActionCol);
      grid[r][0] = {
        type: 'ingredient',
        data: ingredients[r],
        rowspan: 1,
        colspan: ingColspan
      };

      for (let c = 1; c < ingColspan; c++) {
        grid[r][c] = { type: 'covered' };
      }
    }

    // Extend intermediate actions horizontally if gaps exist
    for (let r = 0; r < numRows; r++) {
      for (let c = 1; c < totalCols; c++) {
        const cell = grid[r][c];
        if (cell && cell.type === 'action') {
          let canExpand = true;
          let extraColspan = 0;
          for (let nextC = c + 1; nextC < totalCols; nextC++) {
            for (let subR = r; subR < r + cell.rowspan; subR++) {
              if (grid[subR][nextC] !== null) {
                canExpand = false;
                break;
              }
            }
            if (canExpand) {
              extraColspan++;
              for (let subR = r; subR < r + cell.rowspan; subR++) {
                grid[subR][nextC] = { type: 'covered' };
              }
            } else {
              break;
            }
          }
          cell.colspan += extraColspan;
        }
      }
    }

    let html = '';

    prepSteps.forEach((step, idx) => {
      if (!step || !step.trim()) return;
      html += `
        <tr class="prep-header-row">
          <td colspan="${totalCols}" class="prep-cell" data-prep-index="${idx}">
            ${escapeHtml(step.trim())}
          </td>
        </tr>
      `;
    });

    for (let r = 0; r < numRows; r++) {
      html += `<tr data-row-index="${r}">`;

      for (let c = 0; c < totalCols; c++) {
        const cell = grid[r][c];
        if (!cell || cell.type === 'covered') {
          continue;
        }

        if (cell.type === 'ingredient') {
          const ing = cell.data;
          const formatted = formatIngredientText(ing, scale, unitMode);
          const isDone = state.completedItems.has(`ing_${ing.id || r}`);

          html += `
            <td class="ingredient-cell ${isDone ? 'is-done' : ''}" 
                colspan="${cell.colspan}" 
                rowspan="${cell.rowspan}"
                data-type="ingredient"
                data-id="${ing.id || r}">
              ${escapeHtml(formatted)}
            </td>
          `;
        } else if (cell.type === 'action') {
          const act = cell.data;
          const isDone = state.completedItems.has(`act_${act.id || `${r}_${c}`}`);
          const hasTime = !!act.time;

          html += `
            <td class="action-cell ${isDone ? 'is-done' : ''} ${hasTime ? 'has-timer' : ''}" 
                colspan="${cell.colspan}" 
                rowspan="${cell.rowspan}"
                data-type="action"
                data-id="${act.id || `${r}_${c}`}"
                data-time="${escapeHtml(act.time || '')}">
              <span class="action-name">${escapeHtml(act.action || 'mix')}</span>
              ${act.temp ? `<span class="action-temp">${escapeHtml(act.temp)}</span>` : ''}
              ${act.time ? `<span class="action-time">${escapeHtml(act.time)}</span>` : ''}
              ${act.notes ? `<span class="action-notes">${escapeHtml(act.notes)}</span>` : ''}
              ${hasTime ? `<button type="button" class="timer-badge-btn" title="Start timer">⏱️ ${escapeHtml(act.time)}</button>` : ''}
            </td>
          `;
        }
      }

      html += `</tr>`;
    }

    return html;
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // ============================================================================
  // Rendering & Studio UI Synchronization
  // ============================================================================

  function renderRecipeCard() {
    const recipe = state.recipe;

    els.cardTitle.textContent = recipe.title || 'Untitled Recipe';
    els.canvasRecipeTitle.textContent = recipe.title || 'Untitled Recipe';
    els.cardYield.textContent = recipe.yield || 'Standard Yield';
    els.cardSource.textContent = recipe.source || 'Cooking for Engineers';
    els.cardScaleIndicator.textContent = `${state.scale}× scale`;

    els.cfeTable.innerHTML = compileRecipeTable(recipe, state.scale, state.unitMode);
    els.rawJsonEditor.value = JSON.stringify(recipe, null, 2);
  }

  function renderSidebar() {
    const recipe = state.recipe;

    els.recipeTitle.value = recipe.title || '';
    els.recipeYield.value = recipe.yield || '';
    els.recipeSource.value = recipe.source || '';
    els.recipeDescription.value = recipe.description || '';

    renderPrepStepsList();
    renderIngredientsList();
    renderActionStepsList();
  }

  function renderPrepStepsList() {
    const steps = state.recipe.prepSteps || [];
    els.prepStepsContainer.innerHTML = '';

    steps.forEach((step, index) => {
      const item = document.createElement('div');
      item.className = 'prep-step-item';
      item.innerHTML = `
        <span class="drag-handle">☰</span>
        <input type="text" class="prep-step-input" value="${escapeHtml(step)}" placeholder="e.g. Preheat oven to 350° F" data-index="${index}">
        <button type="button" class="btn-icon btn-sm text-danger remove-prep-btn" data-index="${index}" title="Remove prep step">✕</button>
      `;
      els.prepStepsContainer.appendChild(item);
    });
  }

  function renderIngredientsList() {
    const ings = state.recipe.ingredients || [];
    els.ingredientsListContainer.innerHTML = '';

    ings.forEach((ing, index) => {
      const card = document.createElement('div');
      card.className = 'ingredient-card';
      card.innerHTML = `
        <div class="ingredient-card-header">
          <span class="ingredient-index-badge">Row ${index}: [${index}]</span>
          <button type="button" class="btn-icon btn-sm remove-ing-btn" data-index="${index}" title="Remove ingredient">✕</button>
        </div>
        <div class="form-group mb-1">
          <input type="text" class="form-input ing-name-input" value="${escapeHtml(ing.name || '')}" placeholder="Ingredient name (e.g. unsalted butter)" data-index="${index}">
        </div>
        <div class="dual-unit-subgrid">
          <div>
            <label class="sr-only">US Amount & Unit</label>
            <input type="text" class="form-input ing-us-input" value="${escapeHtml(`${ing.amount || ''} ${ing.unit || ''}`.trim())}" placeholder="US: 4 oz" data-index="${index}">
          </div>
          <div>
            <label class="sr-only">Metric Amount & Unit</label>
            <input type="text" class="form-input ing-metric-input" value="${escapeHtml(`${ing.metricAmount || ''} ${ing.metricUnit || ''}`.trim())}" placeholder="Metric: 115 g" data-index="${index}">
          </div>
        </div>
      `;
      els.ingredientsListContainer.appendChild(card);
    });
  }

  function renderActionStepsList() {
    const actions = state.recipe.actions || [];
    const numRows = (state.recipe.ingredients || []).length;
    els.actionStepsContainer.innerHTML = '';

    actions.forEach((act, index) => {
      const card = document.createElement('div');
      card.className = 'action-card';

      let startOptions = '';
      let endOptions = '';
      for (let r = 0; r < numRows; r++) {
        const ingName = state.recipe.ingredients[r]?.name || `Row ${r}`;
        startOptions += `<option value="${r}" ${act.startRow === r ? 'selected' : ''}>Row ${r} (${truncate(ingName, 18)})</option>`;
        endOptions += `<option value="${r}" ${act.endRow === r ? 'selected' : ''}>Row ${r} (${truncate(ingName, 18)})</option>`;
      }

      card.innerHTML = `
        <div class="action-card-header">
          <span class="action-step-num">Col ${act.col || 1} • Block ${index + 1}</span>
          <button type="button" class="btn-icon btn-sm remove-action-btn" data-index="${index}" title="Remove action">✕</button>
        </div>
        <div class="form-row mb-1">
          <div class="flex-2">
            <input type="text" class="form-input action-name-input" value="${escapeHtml(act.action || 'mix')}" placeholder="Action (e.g. mix, melt, bake)" data-index="${index}">
          </div>
          <div class="flex-1">
            <input type="number" class="form-input action-col-input" value="${act.col || 1}" min="1" max="10" placeholder="Col" title="Column position" data-index="${index}">
          </div>
        </div>
        <div class="form-row mb-1">
          <div class="flex-1">
            <label class="form-help">From Row</label>
            <select class="form-input action-start-select" data-index="${index}">${startOptions}</select>
          </div>
          <div class="flex-1">
            <label class="form-help">To Row</label>
            <select class="form-input action-end-select" data-index="${index}">${endOptions}</select>
          </div>
        </div>
        <div class="form-row">
          <div class="flex-1">
            <input type="text" class="form-input action-temp-input" value="${escapeHtml(act.temp || '')}" placeholder="Temp (e.g. 350° F)" data-index="${index}">
          </div>
          <div class="flex-1">
            <input type="text" class="form-input action-time-input" value="${escapeHtml(act.time || '')}" placeholder="Time (e.g. 30 to 40 min)" data-index="${index}">
          </div>
        </div>
      `;
      els.actionStepsContainer.appendChild(card);
    });
  }

  function truncate(str, len) {
    if (!str) return '';
    return str.length > len ? str.slice(0, len) + '…' : str;
  }

  // ============================================================================
  // Smart Recipe Text Parser & Auto-Flow Generator
  // ============================================================================

  function parseRecipeText(rawText) {
    if (!rawText || !rawText.trim()) return null;

    const lines = rawText.split('\n').map(l => l.trim()).filter(Boolean);
    const parsed = {
      title: 'Imported Recipe',
      category: 'other',
      yield: '',
      source: 'Custom / Imported',
      description: '',
      prepSteps: [],
      ingredients: [],
      actions: []
    };

    let section = 'header';
    const instructionLines = [];

    lines.forEach((line, i) => {
      const lower = line.toLowerCase();

      if (i === 0 && !lower.includes('ingredient') && !lower.includes('instruction')) {
        parsed.title = line.replace(/^[#*\s]+/, '');
        return;
      }
      if (lower.startsWith('yield:') || lower.startsWith('servings:')) {
        parsed.yield = line.split(':')[1]?.trim() || '';
        return;
      }

      if (lower.includes('ingredient')) {
        section = 'ingredients';
        return;
      }
      if (lower.includes('instruction') || lower.includes('direction') || lower.includes('method') || lower.includes('preparation')) {
        section = 'instructions';
        return;
      }

      if (section === 'header' || section === 'instructions') {
        if (/preheat|butter and flour|grease|line.*sheet|line.*pan|bring.*boil/i.test(line) && line.length < 120) {
          parsed.prepSteps.push(line.replace(/^\d+[\.\)]\s*/, ''));
          return;
        }
      }

      if (section === 'ingredients' || (section === 'header' && /^\d|^[\u00BC-\u00BE\u2150-\u215E]/.test(line))) {
        const ing = parseIngredientLine(line);
        if (ing) {
          parsed.ingredients.push(ing);
        }
      } else {
        instructionLines.push(line.replace(/^\d+[\.\)]\s*/, ''));
      }
    });

    parsed.actions = generateAutoActions(parsed.ingredients, instructionLines);
    return parsed;
  }

  function parseIngredientLine(line) {
    const clean = line.replace(/^[-*•\d+\.]\s*/, '').trim();
    if (!clean) return null;

    const dualMatch = clean.match(/^([\d\s\/\.\u00BC-\u00BE\u2150-\u215E]+)\s*([a-zA-Z\.]+)?\s*\(([\d\s\/\.]+)\s*([a-zA-Z]+)\)\s+(.*)$/);
    if (dualMatch) {
      return {
        id: `ing_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
        amount: parseFractionString(dualMatch[1]),
        unit: dualMatch[2] || '',
        metricAmount: parseFloat(dualMatch[3]) || null,
        metricUnit: dualMatch[4] || '',
        name: dualMatch[5].trim(),
        rawText: clean
      };
    }

    const singleMatch = clean.match(/^([\d\s\/\.\u00BC-\u00BE\u2150-\u215E]+)\s*([a-zA-Z\.]+)?\s+(.*)$/);
    if (singleMatch) {
      return {
        id: `ing_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
        amount: parseFractionString(singleMatch[1]),
        unit: singleMatch[2] || '',
        metricAmount: null,
        metricUnit: '',
        name: singleMatch[3].trim(),
        rawText: clean
      };
    }

    return {
      id: `ing_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
      amount: null,
      unit: '',
      metricAmount: null,
      metricUnit: '',
      name: clean,
      rawText: clean
    };
  }

  function parseFractionString(str) {
    if (!str) return null;
    str = str.trim();

    const unicodeFractions = { '¼': 0.25, '½': 0.5, '¾': 0.75, '⅓': 0.333, '⅔': 0.666, '⅛': 0.125 };
    for (const [char, val] of Object.entries(unicodeFractions)) {
      if (str.includes(char)) {
        const parts = str.replace(char, '').trim();
        return (parseFloat(parts) || 0) + val;
      }
    }

    if (str.includes('/')) {
      const parts = str.split(/\s+/);
      if (parts.length === 2) {
        const [num, den] = parts[1].split('/').map(Number);
        return parseFloat(parts[0]) + (den ? num / den : 0);
      }
      const [num, den] = str.split('/').map(Number);
      return den ? num / den : parseFloat(str) || null;
    }

    return parseFloat(str) || null;
  }

  function generateAutoActions(ingredients, instructions = []) {
    const numRows = ingredients.length;
    if (numRows === 0) return [];

    const actions = [];
    let currentCol = 1;
    const joinedInst = instructions.join(' ').toLowerCase();

    const dryIndices = [];
    const wetIndices = [];

    ingredients.forEach((ing, idx) => {
      const name = ing.name.toLowerCase();
      if (/flour|cocoa|baking soda|baking powder|salt|cinnamon|yeast/.test(name)) {
        dryIndices.push(idx);
      } else {
        wetIndices.push(idx);
      }
    });

    const isBaking = /bake|oven|flour|sugar|dough|batter/.test(joinedInst) || dryIndices.length > 1;

    if (isBaking && dryIndices.length > 0 && wetIndices.length > 0) {
      const minWet = Math.min(...wetIndices);
      const maxWet = Math.max(...wetIndices);
      const minDry = Math.min(...dryIndices);
      const maxDry = Math.max(...dryIndices);

      actions.push({
        id: `act_${Date.now()}_1`,
        action: 'mix',
        startRow: minWet,
        endRow: maxWet,
        col: 1
      });

      if (maxDry > minDry) {
        actions.push({
          id: `act_${Date.now()}_2`,
          action: 'whisk',
          notes: 'dry ingredients',
          startRow: minDry,
          endRow: maxDry,
          col: 1
        });
      }

      currentCol = 2;

      actions.push({
        id: `act_${Date.now()}_3`,
        action: 'fold in',
        startRow: 0,
        endRow: numRows - 1,
        col: currentCol++
      });

      const bakeMatch = joinedInst.match(/bake(?:\s+at)?\s+(\d+°?\s*[fcFC]?)[^\.\n]*?(?:for\s+)?(\d+\s*(?:to|-)\s*\d+\s*min(?:utes)?|\d+\s*min(?:utes)?)/i);
      actions.push({
        id: `act_${Date.now()}_4`,
        action: 'bake',
        temp: bakeMatch ? bakeMatch[1] : '350° F (170° C)',
        time: bakeMatch ? bakeMatch[2] : '25 to 30 min',
        startRow: 0,
        endRow: numRows - 1,
        col: currentCol
      });
    } else {
      actions.push({
        id: `act_${Date.now()}_1`,
        action: 'combine & mix',
        startRow: 0,
        endRow: numRows - 1,
        col: 1
      });
      actions.push({
        id: `act_${Date.now()}_2`,
        action: 'cook',
        time: '15 to 20 min',
        startRow: 0,
        endRow: numRows - 1,
        col: 2
      });
    }

    return actions;
  }

  // ============================================================================
  // Export Engines (PNG, SVG, Share Link, JSON, Markdown)
  // ============================================================================

  function exportAsPng() {
    showToast('Generating high-resolution PNG image...');

    const card = els.recipeCardWrapper;
    const rect = card.getBoundingClientRect();
    const dpr = 2;

    const width = Math.ceil(rect.width);
    const height = Math.ceil(rect.height);

    const canvas = els.exportCanvas;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);

    const clonedHtml = card.outerHTML;
    const computedStyles = window.getComputedStyle(document.body);
    const cfeBg = computedStyles.getPropertyValue('--cfe-bg').trim();
    const cfeText = computedStyles.getPropertyValue('--cfe-text').trim();
    const cfeBorder = computedStyles.getPropertyValue('--cfe-inner-border').trim();

    const svgData = `
      <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
        <foreignObject width="100%" height="100%">
          <div xmlns="http://www.w3.org/1999/xhtml">
            <style>
              * { box-sizing: border-box; margin: 0; padding: 0; }
              body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }
              .recipe-card-wrapper {
                background-color: ${cfeBg};
                color: ${cfeText};
                padding: 1.5rem;
                font-family: inherit;
              }
              .recipe-card-header { display: flex; justify-content: space-between; margin-bottom: 1rem; }
              .card-title { font-size: 1.5rem; font-weight: bold; margin-bottom: 0.25rem; }
              .card-meta { font-size: 0.85rem; opacity: 0.8; }
              .format-badge { font-size: 0.65rem; border: 1px solid currentColor; padding: 2px 6px; }
              .cfe-table {
                border-collapse: collapse;
                width: 100%;
                border: 2px solid ${cfeBorder};
                background-color: ${cfeBg};
              }
              .cfe-table td {
                border: 2px solid ${cfeBorder};
                padding: 8px 12px;
                vertical-align: middle;
                color: ${cfeText};
              }
              .cfe-table tr.prep-header-row td { text-align: center; font-weight: 500; font-size: 1.1rem; }
              .cfe-table td.ingredient-cell { text-align: left; }
              .cfe-table td.action-cell { text-align: center; font-weight: 500; }
              .action-name { font-size: 1.1rem; font-weight: 500; display: block; }
              .action-temp, .action-time { display: block; font-size: 0.9rem; margin-top: 2px; }
              .action-notes { display: block; font-size: 0.8rem; opacity: 0.85; margin-top: 2px; }
              .timer-badge-btn { display: none; }
              .recipe-card-footer { display: flex; justify-content: space-between; margin-top: 0.75rem; font-size: 0.75rem; opacity: 0.7; }
            </style>
            ${clonedHtml}
          </div>
        </foreignObject>
      </svg>
    `;

    const img = new Image();
    const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(svgBlob);

    img.onload = function () {
      ctx.fillStyle = cfeBg || '#ffffff';
      ctx.fillRect(0, 0, width, height);
      ctx.drawImage(img, 0, 0, width, height);
      URL.revokeObjectURL(url);

      const pngUrl = canvas.toDataURL('image/png');
      const a = document.createElement('a');
      a.href = pngUrl;
      a.download = `${(state.recipe.title || 'recipe').toLowerCase().replace(/[^a-z0-9]+/g, '-')}-flowchart.png`;
      a.click();
      showToast('✅ High-res PNG downloaded successfully!');
    };

    img.onerror = function () {
      URL.revokeObjectURL(url);
      window.print();
      showToast('⚠️ Direct image render fallback: use Print / Save as PDF');
    };

    img.src = url;
  }

  function exportAsSvg() {
    const card = els.recipeCardWrapper;
    const rect = card.getBoundingClientRect();
    const width = Math.ceil(rect.width);
    const height = Math.ceil(rect.height);

    const svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <foreignObject width="100%" height="100%">
    <div xmlns="http://www.w3.org/1999/xhtml">
      <style>
        .cfe-table { border-collapse: collapse; width: 100%; border: 2px solid var(--cfe-frame-border, #266b35); }
        .cfe-table td { border: 2px solid var(--cfe-inner-border, #266b35); padding: 8px 12px; }
      </style>
      ${card.outerHTML}
    </div>
  </foreignObject>
</svg>`;

    const blob = new Blob([svgContent], { type: 'image/svg+xml' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `${(state.recipe.title || 'recipe').toLowerCase().replace(/[^a-z0-9]+/g, '-')}-flowchart.svg`;
    a.click();
    showToast('✅ Scalable SVG downloaded!');
  }

  function copyShareLink() {
    try {
      const jsonStr = JSON.stringify(state.recipe);
      const encoded = encodeURIComponent(btoa(unescape(encodeURIComponent(jsonStr))));
      const shareUrl = `${window.location.origin}${window.location.pathname}#recipe=${encoded}`;
      navigator.clipboard.writeText(shareUrl);
      showToast('🔗 Shareable link copied to clipboard!');
    } catch (e) {
      showToast('❌ Could not generate link');
    }
  }

  function copyMarkdownTable() {
    const recipe = state.recipe;
    let md = `### ${recipe.title}\n\n`;
    if (recipe.prepSteps && recipe.prepSteps.length > 0) {
      md += `**Prep:**\n`;
      recipe.prepSteps.forEach(p => md += `- ${p}\n`);
      md += `\n`;
    }
    md += `| Ingredients | Process Flow |\n| --- | --- |\n`;
    recipe.ingredients.forEach((ing, i) => {
      const actionsAtRow = recipe.actions.filter(a => a.startRow <= i && a.endRow >= i);
      const acts = actionsAtRow.map(a => `${a.action}${a.time ? ` (${a.time})` : ''}`).join(' → ');
      md += `| ${formatIngredientText(ing, state.scale, state.unitMode)} | ${acts || '—'} |\n`;
    });
    navigator.clipboard.writeText(md);
    showToast('📋 Markdown table copied to clipboard!');
  }

  function exportJson() {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(state.recipe, null, 2));
    const a = document.createElement('a');
    a.href = dataStr;
    a.download = `${(state.recipe.title || 'recipe').toLowerCase().replace(/[^a-z0-9]+/g, '-')}.json`;
    a.click();
    showToast('💾 Recipe JSON downloaded!');
  }

  function checkUrlHash() {
    const hash = window.location.hash;
    if (hash.startsWith('#recipe=')) {
      try {
        const encoded = hash.replace('#recipe=', '');
        const jsonStr = decodeURIComponent(escape(atob(decodeURIComponent(encoded))));
        const parsed = JSON.parse(jsonStr);
        if (parsed && parsed.ingredients) {
          state.recipe = parsed;
          setView('studio');
          showToast('Loaded shared recipe from URL!');
        }
      } catch (e) {
        console.error('Error parsing shared URL hash:', e);
      }
    }
  }

  // ============================================================================
  // Kitchen Mode & Timers
  // ============================================================================

  function toggleKitchenMode() {
    state.kitchenMode = !state.kitchenMode;
    document.body.classList.toggle('kitchen-mode-active', state.kitchenMode);
    els.cookModeBtn.classList.toggle('active', state.kitchenMode);
    if (state.kitchenMode) {
      showToast('🍳 Kitchen Mode active: click cells to check off steps!');
    } else {
      showToast('Kitchen Mode exited');
    }
  }

  function startTimer(timeStr) {
    if (!timeStr) return;
    const match = timeStr.match(/(\d+)\s*(?:to|-)?\s*(\d+)?\s*min/i);
    let minutes = 10;
    if (match) {
      minutes = parseInt(match[2] || match[1], 10);
    } else {
      const secMatch = timeStr.match(/(\d+)\s*sec/i);
      if (secMatch) minutes = parseInt(secMatch[1], 10) / 60;
    }

    let remainingSeconds = Math.max(10, Math.round(minutes * 60));

    if (state.activeTimer) {
      clearInterval(state.activeTimer.interval);
    }

    els.kitchenActiveTimer.classList.remove('d-none');
    updateTimerDisplay(remainingSeconds);

    const interval = setInterval(() => {
      remainingSeconds--;
      if (remainingSeconds <= 0) {
        clearInterval(interval);
        playTimerAlarm();
        showToast('🔔 TIMER COMPLETE: Step finished!');
        els.kitchenActiveTimer.classList.add('d-none');
      } else {
        updateTimerDisplay(remainingSeconds);
      }
    }, 1000);

    state.activeTimer = { interval, remainingSeconds };
    showToast(`⏱️ Timer started for ${minutes} minutes!`);
  }

  function updateTimerDisplay(sec) {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    els.activeTimerTime.textContent = `${m}:${s < 10 ? '0' : ''}${s}`;
  }

  function playTimerAlarm() {
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, audioCtx.currentTime);
      osc.frequency.setValueAtTime(880, audioCtx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.6);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.6);
    } catch (e) {
      // Audio fallback
    }
  }

  // ============================================================================
  // Toast Notifications
  // ============================================================================

  function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    els.toastContainer.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.2s ease';
      setTimeout(() => toast.remove(), 200);
    }, 3200);
  }

  // ============================================================================
  // Event Listeners & Binding
  // ============================================================================

  function bindEvents() {
    // Navigation: Return to Cookbook
    els.brandHomeLink.addEventListener('click', () => setView('cookbook'));
    els.backToCookbookBtn.addEventListener('click', () => setView('cookbook'));
    els.browseBtn.addEventListener('click', () => setView('cookbook'));

    // Cookbook Hero Search
    els.cookbookSearchInput.addEventListener('input', (e) => {
      state.cookbookSearchTerm = e.target.value;
      renderCookbookGallery(state.cookbookFilterCat, state.cookbookSearchTerm);
    });

    // Cookbook Category Tabs
    els.cookbookCatTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        els.cookbookCatTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        state.cookbookFilterCat = tab.dataset.cat || 'all';
        renderCookbookGallery(state.cookbookFilterCat, state.cookbookSearchTerm);
      });
    });

    // Cookbook Card Clicks (Open Flowchart, Fork, Delete)
    els.cookbookGalleryGrid.addEventListener('click', (e) => {
      const card = e.target.closest('.cookbook-card');
      if (!card) return;

      const btn = e.target.closest('button[data-action]');
      const key = card.dataset.key;
      const isCustom = card.dataset.custom === 'true';

      if (btn) {
        const action = btn.dataset.action;
        if (action === 'open') {
          openRecipeByKey(key, isCustom);
        } else if (action === 'fork') {
          forkRecipeByKey(key, isCustom);
        } else if (action === 'delete') {
          const id = btn.dataset.id;
          if (confirm('Delete this recipe from your personal recipes?')) {
            deleteCustomRecipe(id);
            showToast('Recipe deleted.');
          }
        }
      } else {
        // Direct click on card opens flowchart
        openRecipeByKey(key, isCustom);
      }
    });

    // Preset Selector Change in Studio Header
    els.presetSelect.addEventListener('change', (e) => {
      const val = e.target.value;
      if (!val) return;
      if (val.startsWith('preset:')) {
        const key = val.replace('preset:', '');
        openRecipeByKey(key, false);
      } else if (val.startsWith('custom:')) {
        const id = val.replace('custom:', '');
        openRecipeByKey(id, true);
      }
    });

    // Open Create Modal
    function openCreateModal() {
      els.newRecipeTitleInput.value = '';
      els.newRecipeYieldInput.value = '';
      els.newRecipeDescInput.value = '';
      els.newRecipePrepInput.value = '';
      els.newRecipeIngInput.value = '';
      els.createRecipeModal.classList.remove('d-none');
    }

    els.newRecipeBtn.addEventListener('click', openCreateModal);
    els.heroNewRecipeBtn.addEventListener('click', openCreateModal);

    els.closeCreateRecipeModalBtn.addEventListener('click', () => {
      els.createRecipeModal.classList.add('d-none');
    });
    els.cancelCreateRecipeBtn.addEventListener('click', () => {
      els.createRecipeModal.classList.add('d-none');
    });

    // Submit Create Recipe
    els.submitCreateRecipeBtn.addEventListener('click', () => {
      const title = els.newRecipeTitleInput.value.trim();
      if (!title) {
        alert('Please enter a recipe title.');
        return;
      }

      const ingText = els.newRecipeIngInput.value.trim();
      const ingLines = ingText.split('\n').filter(l => l.trim());
      if (ingLines.length === 0) {
        alert('Please enter at least one ingredient.');
        return;
      }

      const prepText = els.newRecipePrepInput.value.trim();
      const prepSteps = prepText ? prepText.split('\n').map(l => l.trim()).filter(Boolean) : [];

      const ingredients = ingLines.map(parseIngredientLine).filter(Boolean);
      const autoFlow = els.newRecipeAutoFlow.checked;
      const actions = autoFlow ? generateAutoActions(ingredients, []) : [
        { id: `act_${Date.now()}`, action: 'mix', startRow: 0, endRow: ingredients.length - 1, col: 1 }
      ];

      const newRecipe = {
        id: 'custom_' + Date.now(),
        title: title,
        category: els.newRecipeCategoryInput.value || 'other',
        yield: els.newRecipeYieldInput.value.trim() || 'Standard Yield',
        source: 'My Recipes',
        description: els.newRecipeDescInput.value.trim() || '',
        prepSteps: prepSteps,
        ingredients: ingredients,
        actions: actions,
        isCustom: true
      };

      saveCustomRecipe(newRecipe);
      state.recipe = newRecipe;
      state.completedItems.clear();
      setView('studio');
      setEditMode(true);
      els.createRecipeModal.classList.add('d-none');
      showToast(`🎉 Created "${title}" and opened in editor!`);
    });

    // Save Current Recipe Button (in Sidebar)
    els.saveCurrentRecipeBtn.addEventListener('click', () => {
      const toSave = JSON.parse(JSON.stringify(state.recipe));
      toSave.id = toSave.id || ('custom_' + Date.now());
      toSave.isCustom = true;
      saveCustomRecipe(toSave);
      showToast(`💾 Saved "${toSave.title}" to My Recipes!`);
    });

    // Scale Controls
    els.scaleBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        els.scaleBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.scale = parseFloat(btn.dataset.scale) || 1.0;
        renderRecipeCard();
      });
    });

    // Unit Display Controls
    els.unitBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        els.unitBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.unitMode = btn.dataset.units || 'dual';
        renderRecipeCard();
      });
    });

    // Theme Switcher
    els.themeSelect.addEventListener('change', (e) => {
      const theme = e.target.value;
      state.theme = theme;
      document.body.setAttribute('data-theme', theme);
    });

    // Kitchen Mode Toggle
    els.cookModeBtn.addEventListener('click', toggleKitchenMode);

    // Stop active timer
    els.stopActiveTimerBtn.addEventListener('click', () => {
      if (state.activeTimer) {
        clearInterval(state.activeTimer.interval);
        state.activeTimer = null;
      }
      els.kitchenActiveTimer.classList.add('d-none');
    });

    // Table cell clicks for Kitchen Mode / Timers
    els.cfeTable.addEventListener('click', (e) => {
      const cell = e.target.closest('td');
      if (!cell) return;

      const timerBtn = e.target.closest('.timer-badge-btn');
      if (timerBtn) {
        e.stopPropagation();
        const timeStr = cell.getAttribute('data-time');
        startTimer(timeStr);
        return;
      }

      if (state.kitchenMode) {
        const id = cell.getAttribute('data-id');
        const type = cell.getAttribute('data-type');
        const key = `${type}_${id}`;
        if (state.completedItems.has(key)) {
          state.completedItems.delete(key);
          cell.classList.remove('is-done');
        } else {
          state.completedItems.add(key);
          cell.classList.add('is-done');
        }
      }
    });

    // Export Dropdown
    els.exportDropdownBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      els.exportDropdownBtn.parentElement.classList.toggle('open');
    });
    document.addEventListener('click', () => {
      els.exportDropdownBtn.parentElement.classList.remove('open');
    });

    // Export Action Buttons
    els.exportPngBtn.addEventListener('click', exportAsPng);
    els.exportSvgBtn.addEventListener('click', exportAsSvg);
    els.printBtn.addEventListener('click', () => window.print());
    els.shareLinkBtn.addEventListener('click', copyShareLink);
    els.copyMarkdownBtn.addEventListener('click', copyMarkdownTable);
    els.exportJsonBtn.addEventListener('click', exportJson);

    // Sidebar Tabs
    els.tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.dataset.tab;
        els.tabBtns.forEach(b => b.classList.remove('active'));
        els.tabPanels.forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById(`tab-${target}`).classList.add('active');
      });
    });

    // Sidebar & Edit Mode Toggle
    if (els.editModeBtn) {
      els.editModeBtn.addEventListener('click', toggleEditMode);
    }
    if (els.toggleSidebarBtn) {
      els.toggleSidebarBtn.addEventListener('click', () => setEditMode(false));
    }
    if (els.openSidebarFloatingBtn) {
      els.openSidebarFloatingBtn.addEventListener('click', () => setEditMode(true));
    }

    // Zoom Controls
    els.zoomInBtn.addEventListener('click', () => setZoom(state.zoom + 0.1));
    els.zoomOutBtn.addEventListener('click', () => setZoom(state.zoom - 0.1));
    els.zoomFitBtn.addEventListener('click', () => setZoom(1.0));

    // Form inputs: General Info
    els.recipeTitle.addEventListener('input', (e) => {
      state.recipe.title = e.target.value;
      renderRecipeCard();
    });
    els.recipeYield.addEventListener('input', (e) => {
      state.recipe.yield = e.target.value;
      renderRecipeCard();
    });
    els.recipeSource.addEventListener('input', (e) => {
      state.recipe.source = e.target.value;
      renderRecipeCard();
    });
    els.recipeDescription.addEventListener('input', (e) => {
      state.recipe.description = e.target.value;
    });

    // Prep Steps
    els.addPrepStepBtn.addEventListener('click', () => {
      if (!state.recipe.prepSteps) state.recipe.prepSteps = [];
      state.recipe.prepSteps.push('');
      renderPrepStepsList();
      renderRecipeCard();
    });

    els.prepStepsContainer.addEventListener('input', (e) => {
      if (e.target.classList.contains('prep-step-input')) {
        const idx = parseInt(e.target.dataset.index, 10);
        state.recipe.prepSteps[idx] = e.target.value;
        renderRecipeCard();
      }
    });

    els.prepStepsContainer.addEventListener('click', (e) => {
      if (e.target.classList.contains('remove-prep-btn')) {
        const idx = parseInt(e.target.dataset.index, 10);
        state.recipe.prepSteps.splice(idx, 1);
        renderPrepStepsList();
        renderRecipeCard();
      }
    });

    // Ingredients
    els.addIngredientBtn.addEventListener('click', () => {
      if (!state.recipe.ingredients) state.recipe.ingredients = [];
      state.recipe.ingredients.push({
        id: `ing_${Date.now()}`,
        name: 'New ingredient',
        amount: 1,
        unit: 'unit',
        metricAmount: null,
        metricUnit: '',
        rawText: '1 unit New ingredient'
      });
      renderIngredientsList();
      renderActionStepsList();
      renderRecipeCard();
    });

    els.ingredientsListContainer.addEventListener('input', (e) => {
      const idx = parseInt(e.target.dataset.index, 10);
      const ing = state.recipe.ingredients[idx];
      if (!ing) return;

      if (e.target.classList.contains('ing-name-input')) {
        ing.name = e.target.value;
      } else if (e.target.classList.contains('ing-us-input')) {
        const parsed = parseIngredientLine(`${e.target.value} ${ing.name}`);
        if (parsed) {
          ing.amount = parsed.amount;
          ing.unit = parsed.unit;
        }
      } else if (e.target.classList.contains('ing-metric-input')) {
        const parts = e.target.value.trim().split(/\s+/);
        ing.metricAmount = parseFloat(parts[0]) || null;
        ing.metricUnit = parts[1] || '';
      }
      renderRecipeCard();
    });

    els.ingredientsListContainer.addEventListener('click', (e) => {
      if (e.target.classList.contains('remove-ing-btn')) {
        const idx = parseInt(e.target.dataset.index, 10);
        state.recipe.ingredients.splice(idx, 1);
        renderIngredientsList();
        renderActionStepsList();
        renderRecipeCard();
      }
    });

    // Actions Management
    els.addActionStepBtn.addEventListener('click', () => {
      if (!state.recipe.actions) state.recipe.actions = [];
      const numRows = (state.recipe.ingredients || []).length;
      state.recipe.actions.push({
        id: `act_${Date.now()}`,
        action: 'mix',
        startRow: 0,
        endRow: Math.max(0, numRows - 1),
        col: (state.recipe.actions.length > 0 ? (state.recipe.actions[state.recipe.actions.length - 1].col || 1) + 1 : 1)
      });
      renderActionStepsList();
      renderRecipeCard();
    });

    els.actionStepsContainer.addEventListener('input', (e) => {
      const idx = parseInt(e.target.dataset.index, 10);
      const act = state.recipe.actions[idx];
      if (!act) return;

      if (e.target.classList.contains('action-name-input')) {
        act.action = e.target.value;
      } else if (e.target.classList.contains('action-col-input')) {
        act.col = parseInt(e.target.value, 10) || 1;
      } else if (e.target.classList.contains('action-start-select')) {
        act.startRow = parseInt(e.target.value, 10) || 0;
      } else if (e.target.classList.contains('action-end-select')) {
        act.endRow = parseInt(e.target.value, 10) || 0;
      } else if (e.target.classList.contains('action-temp-input')) {
        act.temp = e.target.value;
      } else if (e.target.classList.contains('action-time-input')) {
        act.time = e.target.value;
      }
      renderRecipeCard();
    });

    els.actionStepsContainer.addEventListener('click', (e) => {
      if (e.target.classList.contains('remove-action-btn')) {
        const idx = parseInt(e.target.dataset.index, 10);
        state.recipe.actions.splice(idx, 1);
        renderActionStepsList();
        renderRecipeCard();
      }
    });

    // Auto-Group / Auto-Arrange
    els.autoGroupBtn.addEventListener('click', () => {
      state.recipe.actions = generateAutoActions(state.recipe.ingredients, []);
      renderActionStepsList();
      renderRecipeCard();
      showToast('🪄 Auto-arranged action graph based on ingredients!');
    });

    // Raw JSON Editor
    els.applyJsonBtn.addEventListener('click', () => {
      try {
        const parsed = JSON.parse(els.rawJsonEditor.value);
        if (parsed && parsed.ingredients) {
          state.recipe = parsed;
          renderRecipeCard();
          renderSidebar();
          showToast('✅ Recipe JSON applied successfully!');
        }
      } catch (err) {
        showToast('❌ Invalid JSON syntax: ' + err.message);
      }
    });

    // Import Modal
    els.importBtn.addEventListener('click', () => els.importModal.classList.remove('d-none'));
    els.closeImportModalBtn.addEventListener('click', () => els.importModal.classList.add('d-none'));
    els.cancelImportBtn.addEventListener('click', () => els.importModal.classList.add('d-none'));

    els.processImportBtn.addEventListener('click', () => {
      const text = els.importRecipeInput.value;
      const parsed = parseRecipeText(text);
      if (parsed && parsed.ingredients.length > 0) {
        saveCustomRecipe(parsed);
        state.recipe = parsed;
        setView('studio');
        els.importModal.classList.add('d-none');
        showToast(`🎉 Parsed ${parsed.ingredients.length} ingredients into Tabular Notation!`);
      } else {
        showToast('⚠️ Could not find ingredients in pasted text. Check format.');
      }
    });

    // Quick Add Modal
    els.quickAddIngBtn.addEventListener('click', () => els.quickAddModal.classList.remove('d-none'));
    els.closeQuickAddModalBtn.addEventListener('click', () => els.quickAddModal.classList.add('d-none'));
    els.cancelQuickAddBtn.addEventListener('click', () => els.quickAddModal.classList.add('d-none'));

    els.processQuickAddBtn.addEventListener('click', () => {
      const lines = els.quickAddInput.value.split('\n').filter(l => l.trim());
      lines.forEach(line => {
        const ing = parseIngredientLine(line);
        if (ing) state.recipe.ingredients.push(ing);
      });
      renderIngredientsList();
      renderActionStepsList();
      renderRecipeCard();
      els.quickAddModal.classList.add('d-none');
      showToast(`Added ${lines.length} ingredients!`);
    });
  }

  function setZoom(level) {
    state.zoom = Math.max(0.5, Math.min(2.0, Math.round(level * 10) / 10));
    if (els.zoomLevel) els.zoomLevel.textContent = `${Math.round(state.zoom * 100)}%`;
    if (state.zoom === 1.0) {
      els.recipeCardWrapper.style.transform = '';
    } else {
      els.recipeCardWrapper.style.transform = `scale(${state.zoom})`;
    }
  }

  // ============================================================================
  // Initialization
  // ============================================================================

  function init() {
    checkUrlHash();
    bindEvents();
    updateRecipeCatalogUI();
    // Default to the Cookbook First Page unless a recipe was loaded from URL hash
    if (!window.location.hash.startsWith('#recipe=')) {
      setView('cookbook');
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
