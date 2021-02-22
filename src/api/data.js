const data = {
  parentId: 19668,
  slug: "QmJpxqLJ",
  name: "Budget Warrior Blitz v1",
  format: "blitz",
  useCollection: false,
  notes: null,
  visibility: "public",
  cardBack: 1,
  createdAt: "2021-02-22T16:04:46.000000Z",
  totalVotes: 0,
  myVote: 0,
  cards: [
    {
      identifier: "command-and-conquer-red",
      name: "Command and Conquer",
      rarity: "M",
      stats: { cost: "2", attack: "6", defense: "3", resource: "1" },
      text:
        "Defense reactions can't be played to Command and Conquers chain link.\n\nIf Command and Conquer hits a hero, destroy all cards in their arsenal.",
      keywords: ["generic", "action", "attack"],
      flavour: "",
      comments: "",
      rulings: [
        {
          description:
            "The destroyed card is put into its owner’s graveyard.\r\nChain link is different from combat chain. If another attack is played after Command and Conquer in the same combat chain, defense reactions can be played on that attack.",
          source: "",
          createdAt: "2020-08-11T04:46:00.000000Z",
          updatedAt: "2020-08-11T04:46:00.000000Z",
          pivot: { card_id: 319, ruling_id: 311 },
        },
      ],
      image:
        "https://fabdb2.imgix.net/cards/printings/ARC159-RF.png?w=300&fit=clip&auto=compress",
      total: 2,
    },
    {
      identifier: "courage-of-bladehold",
      name: "Courage of Bladehold",
      rarity: "M",
      stats: { defense: "2" },
      text:
        "**Action** - Destroy Courage of Bladehold: Your sword attacks cost [resource] less per turn. **Go again**\n\n**Temper** *(If you defend with Courage of Bladehold, put a -1[defense] counter on it when the combat chain closes then destroy it if it has 0[defense])*",
      keywords: ["warrior", "equipment", "chest"],
      flavour: "",
      comments: "",
      rulings: [],
      image:
        "https://fabdb2.imgix.net/cards/printings/CRU081.png?w=300&fit=clip&auto=compress",
      total: 1,
    },
    {
      identifier: "dauntless-blue",
      name: "Dauntless",
      rarity: "R",
      stats: { cost: "1", defense: "3", resource: "3" },
      text:
        "Your next weapon attack this turn gains +1[attack].\n\nThe next defense reaction card the defending hero plays this turn costs an additional [resource] to play. \n\n**Go again**",
      keywords: ["warrior", "action"],
      flavour: "",
      comments: "",
      rulings: [],
      image:
        "https://fabdb2.imgix.net/cards/printings/CRU087.png?w=300&fit=clip&auto=compress",
      total: 1,
    },
    {
      identifier: "dauntless-red",
      name: "Dauntless",
      rarity: "R",
      stats: { cost: "1", defense: "3", resource: "1" },
      text:
        "Your next weapon attack this turn gains +3[attack].\n\nThe next defense reaction card the defending hero plays this turn costs an additional [resource] to play. \n\n**Go again**",
      keywords: ["warrior", "action"],
      flavour: "",
      comments: "",
      rulings: [],
      image:
        "https://fabdb2.imgix.net/cards/printings/CRU085.png?w=300&fit=clip&auto=compress",
      total: 2,
    },
    {
      identifier: "dawnblade",
      name: "Dawnblade",
      rarity: "T",
      stats: { attack: "3" },
      text:
        "**Once per Turn Action - [resource]: Attack**\n\nIf Dawnblade hits, and it's the second time it has hit this turn, put a +1[attack] counter on Dawnblade. \n\nAt the beginning of your end phase, if Dawnblade did not hit this turn, remove all +1[attack] counters from Dawnblade.",
      keywords: ["warrior", "weapon", "sword", "2h"],
      flavour: "",
      comments: "",
      rulings: [
        {
          description:
            "Dawnblade does not have go again nor can it attack more than once per turn. Dawnblade requires other cards to allow Dawnblade to attack more than once.\nA +1[attack] counter is a permanent effect that increases the power of Dawnblade *(until the counter is removed)*",
          source:
            "https://fabtcg.com/resources/rules-and-policy-center/release-notes/welcome-rathe/",
          createdAt: "2020-08-11T04:45:59.000000Z",
          updatedAt: "2020-08-11T04:45:59.000000Z",
          pivot: { card_id: 115, ruling_id: 204 },
        },
      ],
      image:
        "https://fabdb2.imgix.net/cards/printings/WTR115.png?w=300&fit=clip&auto=compress",
      total: 1,
    },
    {
      identifier: "dorinthea",
      name: "Dorinthea",
      rarity: "T",
      stats: { intellect: "4" },
      text:
        "**Once per Turn Effect** - When your weapon attack hits, you may attack an additional time with that weapon this turn.",
      keywords: ["warrior", "hero", "young"],
      flavour: null,
      comments: null,
      rulings: [
        {
          description:
            "This ability does not give the weapon attack go again. You are still required to have an action point to attack again.\nThis ability bypasses the “Once per Turn Action - Attack” on weapons and allows an additional attack with the same weapon\nThis effect is mandatory, the first weapon you hit with each turn gets this effect. It cannot be saved up for a future weapon attack that turn.",
          source:
            "https://fabtcg.com/resources/rules-and-policy-center/release-notes/welcome-rathe/",
          createdAt: "2020-08-11T04:45:59.000000Z",
          updatedAt: "2020-08-11T04:45:59.000000Z",
          pivot: { card_id: 114, ruling_id: 200 },
        },
      ],
      image:
        "https://fabdb2.imgix.net/cards/printings/WTR114.png?w=300&fit=clip&auto=compress",
      total: 1,
    },
    {
      identifier: "fyendals-spring-tunic",
      name: "Fyendal's Spring Tunic",
      rarity: "L",
      stats: { defense: "1" },
      text:
        "At the start of your turn, if Fyendal's Spring Tunic has less than 3 energy counters, you may put an energy counter on it.\n\n**Instant** - Remove 3 energy counters from Fyendal's Spring tunic: Gain [resource]\n\n**Blade Break** (If you defend with Fyendal's Spring tunic, destroy it when the combat chain closes.)",
      keywords: ["generic", "equipment", "chest"],
      flavour: "",
      comments: "",
      rulings: [
        {
          description:
            "When you defend with a card it remains on the combat chain until the chain closes, therefore you cannot defend with an equipment multiple times on the same combat chain.\nWhen this card is destroyed, it is sent to your graveyard.\nThe ability goes on the stack when the combat chain closes.",
          source:
            "https://fabtcg.com/resources/rules-and-policy-center/release-notes/welcome-rathe/",
          createdAt: "2020-08-11T04:45:58.000000Z",
          updatedAt: "2020-08-11T04:45:58.000000Z",
          pivot: { card_id: 150, ruling_id: 192 },
        },
        {
          description:
            "You cannot activate Fyendal’s Spring Tunic during the start of the turn phase (in response to the trigger), because players do not get priority during the start of turn phase.\nYou must have at least 3 energy counters on Fyendal’s Spring Tunic to use it’s activated ability.\nFyendal’s Spring Tunic’s activated ability is an instant. You may activate it any time you have priority, including during an opponent’s turn, and during the reaction window of either player’s turn.",
          source:
            "https://fabtcg.com/resources/rules-and-policy-center/release-notes/welcome-rathe/",
          createdAt: "2020-08-11T04:45:59.000000Z",
          updatedAt: "2020-08-11T04:45:59.000000Z",
          pivot: { card_id: 150, ruling_id: 207 },
        },
      ],
      image:
        "https://fabdb2.imgix.net/cards/printings/WTR150-CF.png?w=300&fit=clip&auto=compress",
      total: 1,
    },
    {
      identifier: "gamblers-gloves",
      name: "Gambler's Gloves",
      rarity: "M",
      stats: { defense: "0" },
      text:
        "Whenever a hero rolls a 6-sided die, you may destroy Gambler's Gloves. If you do, that hero rerolls the die. *(You decide whether to use Gambler's Glove after seeing the result of the die roll.)*",
      keywords: ["generic", "equipment", "arms"],
      flavour: "",
      comments: "",
      rulings: [],
      image:
        "https://fabdb2.imgix.net/cards/printings/CRU179.png?w=300&fit=clip&auto=compress",
      total: 1,
    },
    {
      identifier: "glint-the-quicksilver-blue",
      name: "Glint the Quicksilver",
      rarity: "M",
      stats: { cost: "0", defense: "3", resource: "3" },
      text:
        "Target weapon attack gains **go again**.\n\n**Reprise** - If the defending hero has defended with a card from their hand this chain link, draw a card.",
      keywords: ["warrior", "attack", "reaction"],
      flavour: "",
      comments: "",
      rulings: [
        {
          description:
            "When an action with go again resolves, its controller gains 1 action point.\nMultiple instances of go again on the same card or activated ability do not stack. If a card or activated ability has multiple instances of go again when it resolves its controller gains 1 action point only.",
          source:
            "https://fabtcg.com/resources/rules-and-policy-center/release-notes/welcome-rathe/",
          createdAt: "2020-08-11T04:45:59.000000Z",
          updatedAt: "2020-08-11T04:45:59.000000Z",
          pivot: { card_id: 118, ruling_id: 196 },
        },
        {
          description:
            "Reprise cares about the current chain link not the whole combat chain. If a previous attack was defended by a card in hand, it will have no effect on reprise for the current chain link.\nReprise is checked at the time you play the card. If a card with reprise is played then a defense reaction is played from hand, the effect will not apply retroactively.\nEquipment and cards from arsenal that defend an attack do not turn on reprise.",
          source:
            "https://fabtcg.com/resources/rules-and-policy-center/release-notes/welcome-rathe/",
          createdAt: "2020-08-11T04:45:59.000000Z",
          updatedAt: "2020-08-11T04:45:59.000000Z",
          pivot: { card_id: 118, ruling_id: 198 },
        },
      ],
      image:
        "https://fabdb2.imgix.net/cards/printings/WTR118-RF.png?w=300&fit=clip&auto=compress",
      total: 2,
    },
    {
      identifier: "hit-and-run-blue",
      name: "Hit and Run",
      rarity: "C",
      stats: { cost: "0", defense: "3", resource: "3" },
      text:
        "Your next weapon attack this turn gains **go again**.\n\nIf you have attacked with a weapon this turn, your next attack this turn gains +1[attack].\n\n**Go again**",
      keywords: ["warrior", "action"],
      flavour: "",
      comments: "",
      rulings: [],
      image:
        "https://fabdb2.imgix.net/cards/printings/CRU093.png?w=300&fit=clip&auto=compress",
      total: 2,
    },
    {
      identifier: "ironrot-gauntlet",
      name: "Ironrot Gauntlet",
      rarity: "C",
      stats: { defense: "1" },
      text:
        "**Blade break** *(If you defend with Ironrot Gauntlet, destroy it when the combat chain closes.)*",
      keywords: ["generic", "equipment", "arms"],
      flavour: "",
      comments: "",
      rulings: [
        {
          description:
            "When you defend with a card it remains on the combat chain until the chain closes, therefore you cannot defend with an equipment multiple times on the same combat chain.\nWhen this card is destroyed, it is sent to your graveyard.\nThe ability goes on the stack when the combat chain closes.",
          source:
            "https://fabtcg.com/resources/rules-and-policy-center/release-notes/welcome-rathe/",
          createdAt: "2020-08-11T04:45:58.000000Z",
          updatedAt: "2020-08-11T04:45:58.000000Z",
          pivot: { card_id: 157, ruling_id: 192 },
        },
      ],
      image:
        "https://fabdb2.imgix.net/cards/printings/WTR157.png?w=300&fit=clip&auto=compress",
      total: 1,
    },
    {
      identifier: "ironrot-helm",
      name: "Ironrot Helm",
      rarity: "C",
      stats: { defense: "1" },
      text:
        "**Blade break** *(If you defend with Ironrot Helm, destroy it when the combat chain closes.)*",
      keywords: ["generic", "equipment", "head"],
      flavour: "",
      comments: "",
      rulings: [
        {
          description:
            "When you defend with a card it remains on the combat chain until the chain closes, therefore you cannot defend with an equipment multiple times on the same combat chain.\nWhen this card is destroyed, it is sent to your graveyard.\nThe ability goes on the stack when the combat chain closes.",
          source:
            "https://fabtcg.com/resources/rules-and-policy-center/release-notes/welcome-rathe/",
          createdAt: "2020-08-11T04:45:58.000000Z",
          updatedAt: "2020-08-11T04:45:58.000000Z",
          pivot: { card_id: 155, ruling_id: 192 },
        },
      ],
      image:
        "https://fabdb2.imgix.net/cards/printings/WTR155.png?w=300&fit=clip&auto=compress",
      total: 1,
    },
    {
      identifier: "ironsong-determination-yellow",
      name: "Ironsong Determination",
      rarity: "S",
      stats: { cost: "0", defense: "3", resource: "2" },
      text:
        "Target weapon gains +1[attack] and **dominate**.\n\n**Go again**\n",
      keywords: ["warrior", "action"],
      flavour:
        '"The light of Sol will dispel the darkness , and guide us unto the path of righteousness."',
      comments: "",
      rulings: [
        {
          description:
            "Cards with dominate cannot be defended with more than 1 card from the defending hero’s hand.\nYou can still block with equipment and defense reactions played from arsenal in addition to up to 1 card from hand.\nPlaying a defense reaction from your hand counts towards the 1 card from your hand restriction. You cannot defend with a card in your hand then play a defense reaction from your hand.",
          source:
            "https://fabtcg.com/resources/rules-and-policy-center/release-notes/welcome-rathe/",
          createdAt: "2020-08-11T04:45:59.000000Z",
          updatedAt: "2020-08-11T04:45:59.000000Z",
          pivot: { card_id: 122, ruling_id: 195 },
        },
        {
          description:
            "When an action with go again resolves, its controller gains 1 action point.\nMultiple instances of go again on the same card or activated ability do not stack. If a card or activated ability has multiple instances of go again when it resolves its controller gains 1 action point only.",
          source:
            "https://fabtcg.com/resources/rules-and-policy-center/release-notes/welcome-rathe/",
          createdAt: "2020-08-11T04:45:59.000000Z",
          updatedAt: "2020-08-11T04:45:59.000000Z",
          pivot: { card_id: 122, ruling_id: 196 },
        },
        {
          description:
            "This affects all weapon attacks from target weapon this turn not just the next attack.\r\nAn attack with Dominate cannot be defended with more than 1 card from hand.",
          source:
            "https://fabtcg.com/resources/rules-and-policy-center/release-notes/welcome-rathe/",
          createdAt: "2020-08-11T04:46:00.000000Z",
          updatedAt: "2020-08-11T04:46:00.000000Z",
          pivot: { card_id: 122, ruling_id: 279 },
        },
      ],
      image:
        "https://fabdb2.imgix.net/cards/printings/WTR122-RF.png?w=300&fit=clip&auto=compress",
      total: 2,
    },
    {
      identifier: "ironsong-response-blue",
      name: "Ironsong Response",
      rarity: "C",
      stats: { cost: "0", defense: "3", resource: "3" },
      text:
        "**Reprise** - If the defending hero has defended with a card from their hand this chain link, the target weapon attack gains +1[attack].",
      keywords: ["warrior", "attack", "reaction"],
      flavour:
        "The song of a smith rings true, heard with every strike of steel on steel.",
      comments: "",
      rulings: [
        {
          description:
            "Reprise cares about the current chain link not the whole combat chain. If a previous attack was defended by a card in hand, it will have no effect on reprise for the current chain link.\nReprise is checked at the time you play the card. If a card with reprise is played then a defense reaction is played from hand, the effect will not apply retroactively.\nEquipment and cards from arsenal that defend an attack do not turn on reprise.",
          source:
            "https://fabtcg.com/resources/rules-and-policy-center/release-notes/welcome-rathe/",
          createdAt: "2020-08-11T04:45:59.000000Z",
          updatedAt: "2020-08-11T04:45:59.000000Z",
          pivot: { card_id: 134, ruling_id: 198 },
        },
        {
          description:
            "Ironsong Response has no card text if reprise is not active and thus cannot be played.\nThis only affects the current weapon attack. It will not affect weapon attacks beyond the current weapon attack.",
          source:
            "https://fabtcg.com/resources/rules-and-policy-center/release-notes/welcome-rathe/",
          createdAt: "2020-08-11T04:46:00.000000Z",
          updatedAt: "2020-08-11T04:46:00.000000Z",
          pivot: { card_id: 134, ruling_id: 280 },
        },
      ],
      image:
        "https://fabdb2.imgix.net/cards/printings/WTR134-RF.png?w=300&fit=clip&auto=compress",
      total: 2,
    },
    {
      identifier: "ironsong-response-red",
      name: "Ironsong Response",
      rarity: "C",
      stats: { cost: "0", defense: "3", resource: "1" },
      text:
        "**Reprise** - If the defending hero has defended with a card from their hand this chain link, the target weapon attack gains +3[attack].",
      keywords: ["warrior", "attack", "reaction"],
      flavour:
        "The song of a smith rings true, heard with every strike of steel on steel.",
      comments: "",
      rulings: [
        {
          description:
            "Reprise cares about the current chain link not the whole combat chain. If a previous attack was defended by a card in hand, it will have no effect on reprise for the current chain link.\nReprise is checked at the time you play the card. If a card with reprise is played then a defense reaction is played from hand, the effect will not apply retroactively.\nEquipment and cards from arsenal that defend an attack do not turn on reprise.",
          source:
            "https://fabtcg.com/resources/rules-and-policy-center/release-notes/welcome-rathe/",
          createdAt: "2020-08-11T04:45:59.000000Z",
          updatedAt: "2020-08-11T04:45:59.000000Z",
          pivot: { card_id: 132, ruling_id: 198 },
        },
        {
          description:
            "Ironsong Response has no card text if reprise is not active and thus cannot be played.\nThis only affects the current weapon attack. It will not affect weapon attacks beyond the current weapon attack.",
          source:
            "https://fabtcg.com/resources/rules-and-policy-center/release-notes/welcome-rathe/",
          createdAt: "2020-08-11T04:46:00.000000Z",
          updatedAt: "2020-08-11T04:46:00.000000Z",
          pivot: { card_id: 132, ruling_id: 280 },
        },
      ],
      image:
        "https://fabdb2.imgix.net/cards/printings/WTR132-RF.png?w=300&fit=clip&auto=compress",
      total: 2,
    },
    {
      identifier: "nullrune-boots",
      name: "Nullrune Boots",
      rarity: "C",
      stats: { defense: "0" },
      text:
        "**Arcane Barrier 1** (If your hero would be dealt arcane damage, you may pay [resource] instead. If you do, prevent 1 arcane damage that source would deal.",
      keywords: ["generic", "equipment", "legs"],
      flavour: "",
      comments: "",
      rulings: [
        {
          description:
            "You can have multiple instances of arcane barrier, for example Nullrune Hood, Nullrune Cloak, and Nullrune Gloves.\nArcane barrier can be used every time you would be dealt arcane damage. It's not limited to once per turn.\nEach instance of arcane barrier you control can be used 1 time only, each time a source would deal arcane damage to you. For example if a source would deal 5 arcane damage to you, and you control two cards with arcane barrier 1, you will in total be able to prevent 2 arcane damage this source would deal to you.\nTo fully prevent a card dealing 3 arcane damage, you would require 3 arcane barrier and 3 resources to prevent it. To fully prevent the arcane damage from 3 Runechant tokens (3 instances of 1 damage), you would require 1 arcane barrier and 3 resources to prevent it.\nA equipment with arcane barrier does not move to the chain when arcane barrier is used.\nYou can prevent arcane damage you would deal to yourself.\nPlayers cannot respond to the prevention. Arcane barrier is a replacement effect, not an activated or triggered ability.\nYou can only pay resources to arcane barrier if a source would deal arcane damage to you.\nPreventing arcane damage does not destroy the equipment with arcane barrier (unless otherwise specified).",
          source:
            "https://fabtcg.com/resources/rules-and-policy-center/release-notes/arcane-rising/",
          createdAt: "2020-08-11T04:46:00.000000Z",
          updatedAt: "2020-08-11T04:46:00.000000Z",
          pivot: { card_id: 253, ruling_id: 290 },
        },
      ],
      image:
        "https://fabdb2.imgix.net/cards/printings/ARC158-CF.png?w=300&fit=clip&auto=compress",
      total: 1,
    },
    {
      identifier: "nullrune-gloves",
      name: "Nullrune Gloves",
      rarity: "C",
      stats: { defense: "0" },
      text:
        "**Arcane Barrier 1** (If your hero would be dealt arcane damage, you may pay [resource] instead. If you do, prevent 1 arcane damage that source would deal.",
      keywords: ["generic", "equipment", "arms"],
      flavour: "",
      comments: "",
      rulings: [
        {
          description:
            "You can have multiple instances of arcane barrier, for example Nullrune Hood, Nullrune Cloak, and Nullrune Gloves.\nArcane barrier can be used every time you would be dealt arcane damage. It's not limited to once per turn.\nEach instance of arcane barrier you control can be used 1 time only, each time a source would deal arcane damage to you. For example if a source would deal 5 arcane damage to you, and you control two cards with arcane barrier 1, you will in total be able to prevent 2 arcane damage this source would deal to you.\nTo fully prevent a card dealing 3 arcane damage, you would require 3 arcane barrier and 3 resources to prevent it. To fully prevent the arcane damage from 3 Runechant tokens (3 instances of 1 damage), you would require 1 arcane barrier and 3 resources to prevent it.\nA equipment with arcane barrier does not move to the chain when arcane barrier is used.\nYou can prevent arcane damage you would deal to yourself.\nPlayers cannot respond to the prevention. Arcane barrier is a replacement effect, not an activated or triggered ability.\nYou can only pay resources to arcane barrier if a source would deal arcane damage to you.\nPreventing arcane damage does not destroy the equipment with arcane barrier (unless otherwise specified).",
          source:
            "https://fabtcg.com/resources/rules-and-policy-center/release-notes/arcane-rising/",
          createdAt: "2020-08-11T04:46:00.000000Z",
          updatedAt: "2020-08-11T04:46:00.000000Z",
          pivot: { card_id: 252, ruling_id: 290 },
        },
      ],
      image:
        "https://fabdb2.imgix.net/cards/printings/ARC157-CF.png?w=300&fit=clip&auto=compress",
      total: 1,
    },
    {
      identifier: "nullrune-hood",
      name: "Nullrune Hood",
      rarity: "C",
      stats: { defense: "0" },
      text:
        "**Arcane Barrier 1** (If your hero would be dealt arcane damage, you may pay [resource] instead. If you do, prevent 1 arcane damage that source would deal.",
      keywords: ["generic", "equipment", "head"],
      flavour: "",
      comments: "",
      rulings: [
        {
          description:
            "You can have multiple instances of arcane barrier, for example Nullrune Hood, Nullrune Cloak, and Nullrune Gloves.\nArcane barrier can be used every time you would be dealt arcane damage. It's not limited to once per turn.\nEach instance of arcane barrier you control can be used 1 time only, each time a source would deal arcane damage to you. For example if a source would deal 5 arcane damage to you, and you control two cards with arcane barrier 1, you will in total be able to prevent 2 arcane damage this source would deal to you.\nTo fully prevent a card dealing 3 arcane damage, you would require 3 arcane barrier and 3 resources to prevent it. To fully prevent the arcane damage from 3 Runechant tokens (3 instances of 1 damage), you would require 1 arcane barrier and 3 resources to prevent it.\nA equipment with arcane barrier does not move to the chain when arcane barrier is used.\nYou can prevent arcane damage you would deal to yourself.\nPlayers cannot respond to the prevention. Arcane barrier is a replacement effect, not an activated or triggered ability.\nYou can only pay resources to arcane barrier if a source would deal arcane damage to you.\nPreventing arcane damage does not destroy the equipment with arcane barrier (unless otherwise specified).",
          source:
            "https://fabtcg.com/resources/rules-and-policy-center/release-notes/arcane-rising/",
          createdAt: "2020-08-11T04:46:00.000000Z",
          updatedAt: "2020-08-11T04:46:00.000000Z",
          pivot: { card_id: 250, ruling_id: 290 },
        },
      ],
      image:
        "https://fabdb2.imgix.net/cards/printings/ARC155-CF.png?w=300&fit=clip&auto=compress",
      total: 1,
    },
    {
      identifier: "nullrune-robe",
      name: "Nullrune Robe",
      rarity: "C",
      stats: { defense: "0" },
      text:
        "**Arcane Barrier 1** (If your hero would be dealt arcane damage, you may pay [resource] instead. If you do, prevent 1 arcane damage that source would deal.",
      keywords: ["generic", "equipment", "chest"],
      flavour: "",
      comments: "",
      rulings: [
        {
          description:
            "You can have multiple instances of arcane barrier, for example Nullrune Hood, Nullrune Cloak, and Nullrune Gloves.\nArcane barrier can be used every time you would be dealt arcane damage. It's not limited to once per turn.\nEach instance of arcane barrier you control can be used 1 time only, each time a source would deal arcane damage to you. For example if a source would deal 5 arcane damage to you, and you control two cards with arcane barrier 1, you will in total be able to prevent 2 arcane damage this source would deal to you.\nTo fully prevent a card dealing 3 arcane damage, you would require 3 arcane barrier and 3 resources to prevent it. To fully prevent the arcane damage from 3 Runechant tokens (3 instances of 1 damage), you would require 1 arcane barrier and 3 resources to prevent it.\nA equipment with arcane barrier does not move to the chain when arcane barrier is used.\nYou can prevent arcane damage you would deal to yourself.\nPlayers cannot respond to the prevention. Arcane barrier is a replacement effect, not an activated or triggered ability.\nYou can only pay resources to arcane barrier if a source would deal arcane damage to you.\nPreventing arcane damage does not destroy the equipment with arcane barrier (unless otherwise specified).",
          source:
            "https://fabtcg.com/resources/rules-and-policy-center/release-notes/arcane-rising/",
          createdAt: "2020-08-11T04:46:00.000000Z",
          updatedAt: "2020-08-11T04:46:00.000000Z",
          pivot: { card_id: 251, ruling_id: 290 },
        },
      ],
      image:
        "https://fabdb2.imgix.net/cards/printings/ARC156-CF.png?w=300&fit=clip&auto=compress",
      total: 1,
    },
    {
      identifier: "out-for-blood-red",
      name: "Out for Blood",
      rarity: "C",
      stats: { cost: "1", defense: "3", resource: "1" },
      text:
        "Target weapon attack gains +3[attack].\n\n**Reprise** If the defending hero has defended with a card from their hand this chain link, your next attack this turn gains +1[attack].",
      keywords: ["warrior", "attack", "reaction"],
      flavour: "",
      comments: "",
      rulings: [],
      image:
        "https://fabdb2.imgix.net/cards/printings/CRU088.png?w=300&fit=clip&auto=compress",
      total: 2,
    },
    {
      identifier: "overpower-blue",
      name: "Overpower",
      rarity: "R",
      stats: { cost: "3", defense: "3", resource: "3" },
      text:
        "Target weapon attack gains +2[attack].\n\n**Reprise** - If the defending hero has defended with a card from their hand this chain link, the attack gains an additional +2[attack].",
      keywords: ["warrior", "attack", "reaction"],
      flavour: "",
      comments: "",
      rulings: [
        {
          description:
            "Reprise cares about the current chain link not the whole combat chain. If a previous attack was defended by a card in hand, it will have no effect on reprise for the current chain link.\nReprise is checked at the time you play the card. If a card with reprise is played then a defense reaction is played from hand, the effect will not apply retroactively.\nEquipment and cards from arsenal that defend an attack do not turn on reprise.",
          source:
            "https://fabtcg.com/resources/rules-and-policy-center/release-notes/welcome-rathe/",
          createdAt: "2020-08-11T04:45:59.000000Z",
          updatedAt: "2020-08-11T04:45:59.000000Z",
          pivot: { card_id: 125, ruling_id: 198 },
        },
        {
          description:
            "This only affects the current weapon attack. It will not affect weapon attacks beyond the current weapon attack.",
          source:
            "https://fabtcg.com/resources/rules-and-policy-center/release-notes/welcome-rathe/",
          createdAt: "2020-08-11T04:46:00.000000Z",
          updatedAt: "2020-08-11T04:46:00.000000Z",
          pivot: { card_id: 125, ruling_id: 282 },
        },
      ],
      image:
        "https://fabdb2.imgix.net/cards/printings/WTR125-RF.png?w=300&fit=clip&auto=compress",
      total: 1,
    },
    {
      identifier: "razor-reflex-red",
      name: "Razor Reflex",
      rarity: "C",
      stats: { cost: "1", defense: "2", resource: "1" },
      text:
        'Choose 1;\n\n* Target sword or dagger attack gains +3[attack].\n* Target attack action card with cost [resource] or less gains +3[attack] and "If this hits, this attack gains **go again**."',
      keywords: ["generic", "attack", "reaction"],
      flavour: "",
      comments: "",
      rulings: [
        {
          description:
            "When an action with go again resolves, its controller gains 1 action point.\nMultiple instances of go again on the same card or activated ability do not stack. If a card or activated ability has multiple instances of go again when it resolves its controller gains 1 action point only.",
          source:
            "https://fabtcg.com/resources/rules-and-policy-center/release-notes/welcome-rathe/",
          createdAt: "2020-08-11T04:45:59.000000Z",
          updatedAt: "2020-08-11T04:45:59.000000Z",
          pivot: { card_id: 209, ruling_id: 196 },
        },
        {
          description:
            "You cannot play Razor Reflex if there is not a legal target\r\nYou cannot target a weapon, only a weapon attack.\r\nYou cannot target a weapon attack with the second option.\r\nIf this is used on an attack with go again, you will only gain 1 action point upon resolution as multiple instances of go again do not stack.",
          source:
            "https://fabtcg.com/resources/rules-and-policy-center/release-notes/welcome-rathe/",
          createdAt: "2020-08-11T04:45:59.000000Z",
          updatedAt: "2020-08-11T04:45:59.000000Z",
          pivot: { card_id: 209, ruling_id: 225 },
        },
      ],
      image:
        "https://fabdb2.imgix.net/cards/printings/WTR209-RF.png?w=300&fit=clip&auto=compress",
      total: 2,
    },
    {
      identifier: "refraction-bolters",
      name: "Refraction Bolters",
      rarity: "C",
      stats: { defense: "1" },
      text:
        "When your weapon attack hits, you may destroy Refraction Bolters. If you do, the attack gains **go again**.\n\n**Battleworn** *(If you defend with Refraction Bolters, put a -1[defense] counter on it when the combat chain closes.)*",
      keywords: ["warrior", "equipment", "legs"],
      flavour: "",
      comments: "",
      rulings: [
        {
          description:
            "When you defend with a card it remains on the combat chain until the chain closes, therefore you cannot defend with an equipment multiple times on the same combat chain.\nA [-1 defense] counter stays on the card until the card is destroyed or the game ends.\nIf the defense of a card that is defending is below zero, calculate as if its defense is zero.",
          source:
            "https://fabtcg.com/resources/rules-and-policy-center/release-notes/welcome-rathe/",
          createdAt: "2020-08-11T04:45:58.000000Z",
          updatedAt: "2020-08-11T04:45:58.000000Z",
          pivot: { card_id: 117, ruling_id: 191 },
        },
        {
          description:
            "When an action with go again resolves, its controller gains 1 action point.\nMultiple instances of go again on the same card or activated ability do not stack. If a card or activated ability has multiple instances of go again when it resolves its controller gains 1 action point only.",
          source:
            "https://fabtcg.com/resources/rules-and-policy-center/release-notes/welcome-rathe/",
          createdAt: "2020-08-11T04:45:59.000000Z",
          updatedAt: "2020-08-11T04:45:59.000000Z",
          pivot: { card_id: 117, ruling_id: 196 },
        },
        {
          description:
            "If this is used on an attack with go again, you will only gain 1 action point upon resolution as multiple instances of go again do not stack.\r\nYou decide if you want to destroy Refraction Bolters after the attack has hit and the damage is dealt.",
          source:
            "https://fabtcg.com/resources/rules-and-policy-center/release-notes/welcome-rathe/",
          createdAt: "2020-08-11T04:46:00.000000Z",
          updatedAt: "2020-08-11T04:46:00.000000Z",
          pivot: { card_id: 117, ruling_id: 276 },
        },
      ],
      image:
        "https://fabdb2.imgix.net/cards/printings/WTR117.png?w=300&fit=clip&auto=compress",
      total: 1,
    },
    {
      identifier: "rout-red",
      name: "Rout",
      rarity: "S",
      stats: { cost: "2", defense: "3", resource: "1" },
      text:
        "Target weapon attack gains +3[attack].\n\n**Reprise** - If the defending hero has defended with a card from their hand this chain link, you may return target non-equipment defending card to its owners hand.",
      keywords: ["warrior", "attack", "reaction"],
      flavour: "",
      comments: "",
      rulings: [
        {
          description:
            "Reprise cares about the current chain link not the whole combat chain. If a previous attack was defended by a card in hand, it will have no effect on reprise for the current chain link.\nReprise is checked at the time you play the card. If a card with reprise is played then a defense reaction is played from hand, the effect will not apply retroactively.\nEquipment and cards from arsenal that defend an attack do not turn on reprise.",
          source:
            "https://fabtcg.com/resources/rules-and-policy-center/release-notes/welcome-rathe/",
          createdAt: "2020-08-11T04:45:59.000000Z",
          updatedAt: "2020-08-11T04:45:59.000000Z",
          pivot: { card_id: 120, ruling_id: 198 },
        },
        {
          description:
            "This only affects the current weapon attack. It will not affect weapon attacks beyond the current weapon attack.\r\nIf reprise is active, you can only play Rout if there is a legal target.\r\nThe defense value of a defending card removed from the chain link is not included in damage calculation.\r\nA defense reaction card that is returned to hand by Rout, can be replayed.",
          source:
            "https://fabtcg.com/resources/rules-and-policy-center/release-notes/welcome-rathe/",
          createdAt: "2020-08-11T04:46:00.000000Z",
          updatedAt: "2020-08-11T04:46:00.000000Z",
          pivot: { card_id: 120, ruling_id: 283 },
        },
      ],
      image:
        "https://fabdb2.imgix.net/cards/printings/WTR120-RF.png?w=300&fit=clip&auto=compress",
      total: 2,
    },
    {
      identifier: "sharpen-steel-red",
      name: "Sharpen Steel",
      rarity: "C",
      stats: { cost: "0", defense: "3", resource: "1" },
      text:
        "Your next weapon attack this turn gains +3[attack].\n\n**Go again**",
      keywords: ["warrior", "action"],
      flavour: "",
      comments: "",
      rulings: [
        {
          description:
            "When an action with go again resolves, its controller gains 1 action point.\nMultiple instances of go again on the same card or activated ability do not stack. If a card or activated ability has multiple instances of go again when it resolves its controller gains 1 action point only.",
          source:
            "https://fabtcg.com/resources/rules-and-policy-center/release-notes/welcome-rathe/",
          createdAt: "2020-08-11T04:45:59.000000Z",
          updatedAt: "2020-08-11T04:45:59.000000Z",
          pivot: { card_id: 141, ruling_id: 196 },
        },
        {
          description:
            "The attack does not gain go again. Sharpen Steel requires an action point to use and provides an action point from go again upon resolution.\r\nThis only affects the next weapon attack. It will not affect weapon attacks beyond the next weapon attack.",
          source:
            "https://fabtcg.com/resources/rules-and-policy-center/release-notes/welcome-rathe/",
          createdAt: "2020-08-11T04:46:00.000000Z",
          updatedAt: "2020-08-11T04:46:00.000000Z",
          pivot: { card_id: 141, ruling_id: 284 },
        },
      ],
      image:
        "https://fabdb2.imgix.net/cards/printings/WTR141-RF.png?w=300&fit=clip&auto=compress",
      total: 2,
    },
    {
      identifier: "sigil-of-solace-red",
      name: "Sigil of Solace",
      rarity: "R",
      stats: { cost: "0", resource: "1" },
      text: "Gain 3[life]",
      keywords: ["generic", "instant"],
      flavour: "",
      comments: "",
      rulings: [],
      image:
        "https://fabdb2.imgix.net/cards/printings/WTR173-RF.png?w=300&fit=clip&auto=compress",
      total: 1,
    },
    {
      identifier: "singing-steelblade-yellow",
      name: "Singing Steelblade",
      rarity: "S",
      stats: { cost: "1", defense: "3", resource: "2" },
      text:
        "**Dorinthea Specialization** *(You may only have Steelblade Supremacy in your deck if your hero is Dorinthea.)*\n\nTarget weapon attack gains +1[attack].\n\n**Reprise** - If the defending hero has defended with a card from their hand this chain link, search your deck for an attack reaction card, banish it face up, then shuffle your deck. You may play it this chain link.",
      keywords: ["warrior", "attack", "reaction"],
      flavour: "",
      comments: "",
      rulings: [
        {
          description:
            "Reprise cares about the current chain link not the whole combat chain. If a previous attack was defended by a card in hand, it will have no effect on reprise for the current chain link.\nReprise is checked at the time you play the card. If a card with reprise is played then a defense reaction is played from hand, the effect will not apply retroactively.\nEquipment and cards from arsenal that defend an attack do not turn on reprise.",
          source:
            "https://fabtcg.com/resources/rules-and-policy-center/release-notes/welcome-rathe/",
          createdAt: "2020-08-11T04:45:59.000000Z",
          updatedAt: "2020-08-11T04:45:59.000000Z",
          pivot: { card_id: 121, ruling_id: 198 },
        },
        {
          description:
            "You may only play Singing Steelblade in your deck if your hero is Dorinthea Ironsong or Dorinthea (young hero).\r\nThis only affects the current weapon attack. It will not affect weapon attacks beyond the current weapon attack.\r\nA combat chain is made up of one of more chain links. The banished card can only be played on the chain link Singing Steelblade was played.\r\nYou may elect not to banish a card when searching, however you still must shuffle your deck.\r\nThe card played from the banished zone goes to the graveyard upon resolution.",
          source:
            "https://fabtcg.com/resources/rules-and-policy-center/release-notes/welcome-rathe/",
          createdAt: "2020-08-11T04:46:00.000000Z",
          updatedAt: "2020-08-11T04:46:00.000000Z",
          pivot: { card_id: 121, ruling_id: 285 },
        },
      ],
      image:
        "https://fabdb2.imgix.net/cards/printings/WTR121-RF.png?w=300&fit=clip&auto=compress",
      total: 2,
    },
    {
      identifier: "sink-below-blue",
      name: "Sink Below",
      rarity: "C",
      stats: { cost: "0", defense: "2", resource: "3" },
      text:
        "You may put a card from your hand on the bottom of your deck. If you do, draw a card.",
      keywords: ["generic", "defense", "reaction"],
      flavour:
        "Those blessed with Aether have an incredible gift - the power to shape the fabric of reality.",
      comments: "",
      rulings: [
        {
          description:
            "Sink Below can only be played in the reaction window.\r\nYou must resolve Sink Below’s ability before deciding if you are defending with any additional cards in the reaction window.\r\nYou cannot use Sink Below’s ability if you have no other cards in your hand. You only draw a card if you put a card from your hand on the bottom of your deck.\r\nSink Below’s effect is optional. You may still play Sink Below if you have no other cards in your hand.",
          source:
            "https://fabtcg.com/resources/rules-and-policy-center/release-notes/welcome-rathe/",
          createdAt: "2020-08-11T04:45:59.000000Z",
          updatedAt: "2020-08-11T04:45:59.000000Z",
          pivot: { card_id: 217, ruling_id: 230 },
        },
      ],
      image:
        "https://fabdb2.imgix.net/cards/printings/WTR217-RF.png?w=300&fit=clip&auto=compress",
      total: 2,
    },
    {
      identifier: "spoils-of-war-red",
      name: "Spoils of War",
      rarity: "M",
      stats: { cost: "1", defense: "3", resource: "1" },
      text:
        "Your next weapon attack this turn gains +2[attack] and **go again**.\n\nWhenever a weapon you control hits this turn, create 2 Copper tokens.\n\n**Go again**",
      keywords: ["warrior", "action"],
      flavour: "",
      comments: "",
      rulings: [],
      image:
        "https://fabdb2.imgix.net/cards/printings/CRU084.png?w=300&fit=clip&auto=compress",
      total: 2,
    },
    {
      identifier: "steelblade-shunt-blue",
      name: "Steelblade Shunt",
      rarity: "R",
      stats: { cost: "1", defense: "4", resource: "3" },
      text:
        "If Steelbade shunt defends a weapon attack, deal 1 damage to the attacking hero.",
      keywords: ["warrior", "defense", "reaction"],
      flavour:
        "A warrior of the Hand of Sol is trained to turn the enemies' advances to his advantage.",
      comments: "",
      rulings: [
        {
          description:
            "The damage cannot be blocked but it can be prevented by a prevention effect.",
          source:
            "https://fabtcg.com/resources/rules-and-policy-center/release-notes/welcome-rathe/",
          createdAt: "2020-08-11T04:46:00.000000Z",
          updatedAt: "2020-08-11T04:46:00.000000Z",
          pivot: { card_id: 128, ruling_id: 286 },
        },
      ],
      image:
        "https://fabdb2.imgix.net/cards/printings/WTR128-RF.png?w=300&fit=clip&auto=compress",
      total: 2,
    },
    {
      identifier: "stroke-of-foresight-red",
      name: "Stroke of Foresight",
      rarity: "C",
      stats: { cost: "1", defense: "3", resource: "1" },
      text:
        "Target weapon attack gains +3[attack].\n\n**Reprise** - If the defending hero has defended with a card from their hand this chain link, draw a card, then put a card from your hand on the top or bottom of your deck.",
      keywords: ["warrior", "attack", "reaction"],
      flavour: "",
      comments: "",
      rulings: [
        {
          description:
            "Reprise cares about the current chain link not the whole combat chain. If a previous attack was defended by a card in hand, it will have no effect on reprise for the current chain link.\nReprise is checked at the time you play the card. If a card with reprise is played then a defense reaction is played from hand, the effect will not apply retroactively.\nEquipment and cards from arsenal that defend an attack do not turn on reprise.",
          source:
            "https://fabtcg.com/resources/rules-and-policy-center/release-notes/welcome-rathe/",
          createdAt: "2020-08-11T04:45:59.000000Z",
          updatedAt: "2020-08-11T04:45:59.000000Z",
          pivot: { card_id: 138, ruling_id: 198 },
        },
        {
          description:
            "This only affects the current weapon attack. It will not affect weapon attacks beyond the current weapon attack.\r\nYou use the reprise ability at the time the attack reaction resolves. (assuming reprise is active)\r\nIf you have no cards in hand at the time you play this with reprise active, you still draw a card then immediately put the card on the top or bottom of your deck.\r\nYou draw a card then immediately put a card from your hand on the top or bottom of your deck. There is no priority between drawing the card and putting a card on the top or bottom of your deck.",
          source:
            "https://fabtcg.com/resources/rules-and-policy-center/release-notes/welcome-rathe/",
          createdAt: "2020-08-11T04:46:00.000000Z",
          updatedAt: "2020-08-11T04:46:00.000000Z",
          pivot: { card_id: 138, ruling_id: 288 },
        },
      ],
      image:
        "https://fabdb2.imgix.net/cards/printings/WTR138-RF.png?w=300&fit=clip&auto=compress",
      total: 2,
    },
    {
      identifier: "twinning-blade-yellow",
      name: "Twinning Blade",
      rarity: "M",
      stats: { cost: "0", defense: "3", resource: "2" },
      text:
        "You may attack an additional time with target sword this turn. *(You must have an action point to attack an additional time.)*",
      keywords: ["warrior", "attack", "reaction"],
      flavour: "",
      comments: "",
      rulings: [],
      image:
        "https://fabdb2.imgix.net/cards/printings/CRU082.png?w=300&fit=clip&auto=compress",
      total: 1,
    },
    {
      identifier: "warriors-valor-blue",
      name: "Warrior's Valor",
      rarity: "R",
      stats: { cost: "1", defense: "3", resource: "3" },
      text:
        'Your next weapon attack this turn gains +1[attack] and "If this hits, the attack gains **go again**"',
      keywords: ["warrior", "action"],
      flavour:
        "The Magister's voice filled the departure halls, as the blessing of Sol washed over them.",
      comments: null,
      rulings: [
        {
          description:
            "When an action with go again resolves, its controller gains 1 action point.\nMultiple instances of go again on the same card or activated ability do not stack. If a card or activated ability has multiple instances of go again when it resolves its controller gains 1 action point only.",
          source:
            "https://fabtcg.com/resources/rules-and-policy-center/release-notes/welcome-rathe/",
          createdAt: "2020-08-11T04:45:59.000000Z",
          updatedAt: "2020-08-11T04:45:59.000000Z",
          pivot: { card_id: 131, ruling_id: 196 },
        },
        {
          description:
            "This only affects the next weapon attack. It will not affect weapon attacks beyond the next weapon attack.",
          source:
            "https://fabtcg.com/resources/rules-and-policy-center/release-notes/welcome-rathe/",
          createdAt: "2020-08-11T04:46:00.000000Z",
          updatedAt: "2020-08-11T04:46:00.000000Z",
          pivot: { card_id: 131, ruling_id: 289 },
        },
      ],
      image:
        "https://fabdb2.imgix.net/cards/printings/WTR131-RF.png?w=300&fit=clip&auto=compress",
      total: 2,
    },
    {
      identifier: "warriors-valor-red",
      name: "Warrior's Valor",
      rarity: "R",
      stats: { cost: "1", defense: "3", resource: "1" },
      text:
        'Your next weapon attack this turn gains +3[attack] and "If this hits, the attack gains **go again**"',
      keywords: ["warrior", "action"],
      flavour:
        "The Magister's voice filled the departure halls, as the blessing of Sol washed over them.",
      comments: "",
      rulings: [
        {
          description:
            "When an action with go again resolves, its controller gains 1 action point.\nMultiple instances of go again on the same card or activated ability do not stack. If a card or activated ability has multiple instances of go again when it resolves its controller gains 1 action point only.",
          source:
            "https://fabtcg.com/resources/rules-and-policy-center/release-notes/welcome-rathe/",
          createdAt: "2020-08-11T04:45:59.000000Z",
          updatedAt: "2020-08-11T04:45:59.000000Z",
          pivot: { card_id: 129, ruling_id: 196 },
        },
        {
          description:
            "This only affects the next weapon attack. It will not affect weapon attacks beyond the next weapon attack.",
          source:
            "https://fabtcg.com/resources/rules-and-policy-center/release-notes/welcome-rathe/",
          createdAt: "2020-08-11T04:46:00.000000Z",
          updatedAt: "2020-08-11T04:46:00.000000Z",
          pivot: { card_id: 129, ruling_id: 289 },
        },
      ],
      image:
        "https://fabdb2.imgix.net/cards/printings/WTR129-RF.png?w=300&fit=clip&auto=compress",
      total: 2,
    },
  ],
  sideboard: [],
};
export default data;
