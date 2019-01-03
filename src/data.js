const ships = [
  {
    id: "GALLEON",
    name: "Galleon",
    attributes: {
      masts: 6,
      sailUnits: 16,
      cannonPorts: {
        quantity: 52,
        type: "large"
      },
      decks: {
        quantity: 6,
        type: "large"
      },
      planks: {
        quantity: 74,
        type: "large"
      }
    },
    spine: {
      fiber: 2560,
      hide: 0,
      metal: 680,
      thatch: 5600,
      wood: 4200
    }
  },
  {
    id: "SLOOP",
    name: "Sloop",
    attributes: {
      masts: 2,
      sailUnits: 2,
      cannonPorts: {
        quantity: 0,
        type: "none"
      },
      decks: {
        quantity: 1,
        type: "small"
      },
      planks: {
        quantity: 12,
        type: "small"
      }
    },
    spine: {
      fiber: 120,
      hide: 0,
      metal: 12,
      thatch: 220,
      wood: 140
    }
  },
  {
    id: "SCHOONER",
    name: "Schooner",
    attributes: {
      masts: 3,
      sailUnits: 4,
      cannonPorts: {
        quantity: 10,
        type: "medium"
      },
      decks: {
        quantity: 2,
        type: "medium"
      },
      planks: {
        quantity: 28,
        type: "medium"
      }
    },
    spine: {
      fiber: 380,
      hide: 0,
      metal: 48,
      thatch: 640,
      wood: 440
    }
  },
  {
    id: "BRIGANTINE",
    name: "Brigantine",
    attributes: {
      masts: 4,
      sailUnits: 8.6,
      cannonPorts: {
        quantity: 12,
        type: "medium"
      },
      decks: {
        quantity: 3,
        type: "medium"
      },
      planks: {
        quantity: 40,
        type: "medium"
      }
    },
    spine: {
      fiber: 1080,
      hide: 0,
      metal: 160,
      thatch: 2160,
      wood: 1400
    }
  },
  {
    id: "RAFT",
    name: "Raft",
    attributes: {
      masts: 1,
      sailUnits: 0,
      cannonPorts: {
        quantity: 0,
        type: "none"
      },
      decks: {
        quantity: 0,
        type: "none"
      },
      planks: {
        quantity: 0,
        type: "none"
      }
    },
    spine: {
      fiber: 125,
      hide: 60,
      metal: 0,
      thatch: 0,
      wood: 250
    }
  },
  {
    id: "DINGHY",
    name: "Dinghy",
    attributes: {
      masts: 0,
      sailUnits: 0,
      cannonPorts: {
        quantity: 0,
        type: "none"
      },
      decks: {
        quantity: 0,
        type: "none"
      },
      planks: {
        quantity: 0,
        type: "none"
      }
    },
    spine: {
      fiber: 240,
      hide: 0,
      metal: 0,
      thatch: 220,
      wood: 180
    }
  }
];
