export const compendiumJournals = {
    welcome: 'Compendium.daggerheart.journals.JournalEntry.g7NhKvwltwafmMyR'
};

export const ruleChoice = {
    on: {
        id: 'on',
        label: 'DAGGERHEART.CONFIG.RuleChoice.on'
    },
    of: {
        id: 'off',
        label: 'DAGGERHEART.CONFIG.RuleChoice.off'
    },
    onWithToggle: {
        id: 'onWithToggle',
        label: 'DAGGERHEART.CONFIG.RuleChoice.onWithToggle'
    },
    offWithToggle: {
        id: 'offWithToggle',
        label: 'DAGGERHEART.CONFIG.RuleChoice.offWithToggle'
    }
};

export const range = {
    self: {
        id: 'self',
        short: 's',
        label: 'DAGGERHEART.CONFIG.Range.self.name',
        description: 'DAGGERHEART.CONFIG.Range.self.description',
        distance: 0
    },
    melee: {
        id: 'melee',
        short: 'm',
        label: 'DAGGERHEART.CONFIG.Range.melee.name',
        description: 'DAGGERHEART.CONFIG.Range.melee.description',
        distance: 1
    },
    veryClose: {
        id: 'veryClose',
        short: 'vc',
        label: 'DAGGERHEART.CONFIG.Range.veryClose.name',
        description: 'DAGGERHEART.CONFIG.Range.veryClose.description',
        distance: 3
    },
    close: {
        id: 'close',
        short: 'c',
        label: 'DAGGERHEART.CONFIG.Range.close.name',
        description: 'DAGGERHEART.CONFIG.Range.close.description',
        distance: 10
    },
    far: {
        id: 'far',
        short: 'f',
        label: 'DAGGERHEART.CONFIG.Range.far.name',
        description: 'DAGGERHEART.CONFIG.Range.far.description',
        distance: 20
    },
    veryFar: {
        id: 'veryFar',
        short: 'vf',
        label: 'DAGGERHEART.CONFIG.Range.veryFar.name',
        description: 'DAGGERHEART.CONFIG.Range.veryFar.description',
        distance: 30
    }
};

export const templateTypes = {
    ...CONST.MEASURED_TEMPLATE_TYPES,
    EMANATION: 'emanation',
    INFRONT: 'inFront'
};

export const rangeInclusion = {
    withinRange: {
        id: 'withinRange',
        label: 'DAGGERHEART.CONFIG.RangeInclusion.withinRange'
    },
    outsideRange: {
        id: 'outsideRange',
        label: 'DAGGERHEART.CONFIG.RangeInclusion.outsideRange'
    }
};

export const otherTargetTypes = {
    friendly: {
        id: 'friendly',
        label: 'Friendly'
    },
    hostile: {
        id: 'hostile',
        label: 'Hostile'
    },
    any: {
        id: 'any',
        label: 'Any'
    }
};

export const targetTypes = {
    self: {
        id: 'self',
        label: 'Self'
    },
    ...otherTargetTypes
};

export const burden = {
    oneHanded: {
        value: 'oneHanded',
        label: 'DAGGERHEART.CONFIG.Burden.oneHanded'
    },
    twoHanded: {
        value: 'twoHanded',
        label: 'DAGGERHEART.CONFIG.Burden.twoHanded'
    }
};

export const damageTypes = {
    physical: {
        id: 'physical',
        label: 'DAGGERHEART.CONFIG.DamageType.physical.name',
        abbreviation: 'DAGGERHEART.CONFIG.DamageType.physical.abbreviation',
        icon: 'fa-hand-fist'
    },
    magical: {
        id: 'magical',
        label: 'DAGGERHEART.CONFIG.DamageType.magical.name',
        abbreviation: 'DAGGERHEART.CONFIG.DamageType.magical.abbreviation',
        icon: 'fa-wand-sparkles'
    }
};

export const healingTypes = {
    hitPoints: {
        id: 'hitPoints',
        label: 'DAGGERHEART.CONFIG.HealingType.hitPoints.name',
        abbreviation: 'DAGGERHEART.CONFIG.HealingType.hitPoints.abbreviation'
    },
    stress: {
        id: 'stress',
        label: 'DAGGERHEART.CONFIG.HealingType.stress.name',
        abbreviation: 'DAGGERHEART.CONFIG.HealingType.stress.abbreviation'
    },
    hope: {
        id: 'hope',
        label: 'DAGGERHEART.CONFIG.HealingType.hope.name',
        abbreviation: 'DAGGERHEART.CONFIG.HealingType.hope.abbreviation'
    },
    armorSlot: {
        id: 'armorSlot',
        label: 'DAGGERHEART.CONFIG.HealingType.armorSlot.name',
        abbreviation: 'DAGGERHEART.CONFIG.HealingType.armorSlot.abbreviation'
    },
    fear: {
        id: 'fear',
        label: 'DAGGERHEART.CONFIG.HealingType.fear.name',
        abbreviation: 'DAGGERHEART.CONFIG.HealingType.fear.abbreviation'
    }
};

export const conditions = {
    vulnerable: {
        id: 'vulnerable',
        name: 'DAGGERHEART.CONFIG.Condition.vulnerable.name',
        icon: 'icons/magic/control/silhouette-fall-slip-prone.webp',
        description: 'DAGGERHEART.CONFIG.Condition.vulnerable.description'
    },
    hidden: {
        id: 'hidden',
        name: 'DAGGERHEART.CONFIG.Condition.hidden.name',
        icon: 'icons/magic/perception/silhouette-stealth-shadow.webp',
        description: 'DAGGERHEART.CONFIG.Condition.hidden.description'
    },
    restrained: {
        id: 'restrained',
        name: 'DAGGERHEART.CONFIG.Condition.restrained.name',
        icon: 'icons/magic/control/debuff-chains-shackle-movement-red.webp',
        description: 'DAGGERHEART.CONFIG.Condition.restrained.description'
    },
    unconcious: {
        id: 'unconcious',
        name: 'DAGGERHEART.CONFIG.Condition.unconcious.name',
        icon: 'icons/magic/control/sleep-bubble-purple.webp',
        description: 'DAGGERHEART.CONFIG.Condition.unconcious.description'
    },
    dead: {
        id: 'dead',
        name: 'DAGGERHEART.CONFIG.Condition.dead.name',
        icon: 'icons/magic/death/grave-tombstone-glow-teal.webp',
        description: 'DAGGERHEART.CONFIG.Condition.dead.description'
    }
};

export const defaultRestOptions = {
    shortRest: () => ({
        tendToWounds: {
            id: 'tendToWounds',
            name: game.i18n.localize('DAGGERHEART.APPLICATIONS.Downtime.shortRest.tendToWounds.name'),
            icon: 'fa-solid fa-bandage',
            img: 'icons/magic/life/cross-worn-green.webp',
            description: game.i18n.localize('DAGGERHEART.APPLICATIONS.Downtime.shortRest.tendToWounds.description'),
            actions: {
                tendToWounds: {
                    type: 'healing',
                    systemPath: 'restMoves.shortRest.moves.tendToWounds.actions',
                    name: game.i18n.localize('DAGGERHEART.APPLICATIONS.Downtime.shortRest.tendToWounds.name'),
                    img: 'icons/magic/life/cross-worn-green.webp',
                    actionType: 'action',
                    chatDisplay: false,
                    healing: {
                        applyTo: healingTypes.hitPoints.id,
                        value: {
                            custom: {
                                enabled: true,
                                formula: '1d4 + @tier'
                            }
                        }
                    }
                }
            }
        },
        clearStress: {
            id: 'clearStress',
            name: game.i18n.localize('DAGGERHEART.APPLICATIONS.Downtime.shortRest.clearStress.name'),
            icon: 'fa-regular fa-face-surprise',
            img: 'icons/magic/perception/eye-ringed-green.webp',
            description: game.i18n.localize('DAGGERHEART.APPLICATIONS.Downtime.shortRest.clearStress.description'),
            actions: {
                clearStress: {
                    type: 'healing',
                    systemPath: 'restMoves.shortRest.moves.clearStress.actions',
                    name: game.i18n.localize('DAGGERHEART.APPLICATIONS.Downtime.shortRest.clearStress.name'),
                    img: 'icons/magic/perception/eye-ringed-green.webp',
                    actionType: 'action',
                    chatDisplay: false,
                    healing: {
                        applyTo: healingTypes.stress.id,
                        value: {
                            custom: {
                                enabled: true,
                                formula: '1d4 + @tier'
                            }
                        }
                    }
                }
            }
        },
        repairArmor: {
            id: 'repairArmor',
            name: game.i18n.localize('DAGGERHEART.APPLICATIONS.Downtime.shortRest.repairArmor.name'),
            icon: 'fa-solid fa-hammer',
            img: 'icons/skills/trades/smithing-anvil-silver-red.webp',
            description: game.i18n.localize('DAGGERHEART.APPLICATIONS.Downtime.shortRest.repairArmor.description'),
            actions: {
                repairArmor: {
                    type: 'healing',
                    systemPath: 'restMoves.shortRest.moves.repairArmor.actions',
                    name: game.i18n.localize('DAGGERHEART.APPLICATIONS.Downtime.shortRest.repairArmor.name'),
                    img: 'icons/skills/trades/smithing-anvil-silver-red.webp',
                    actionType: 'action',
                    chatDisplay: false,
                    healing: {
                        applyTo: healingTypes.armorSlot.id,
                        value: {
                            custom: {
                                enabled: true,
                                formula: '1d4 + @tier'
                            }
                        }
                    }
                }
            }
        },
        prepare: {
            id: 'prepare',
            name: game.i18n.localize('DAGGERHEART.APPLICATIONS.Downtime.shortRest.prepare.name'),
            icon: 'fa-solid fa-dumbbell',
            img: 'icons/skills/trades/academics-merchant-scribe.webp',
            description: game.i18n.localize('DAGGERHEART.APPLICATIONS.Downtime.shortRest.prepare.description'),
            actions: {}
        }
    }),
    longRest: () => ({
        tendToWounds: {
            id: 'tendToWounds',
            name: game.i18n.localize('DAGGERHEART.APPLICATIONS.Downtime.longRest.tendToWounds.name'),
            icon: 'fa-solid fa-bandage',
            img: 'icons/magic/life/cross-worn-green.webp',
            description: game.i18n.localize('DAGGERHEART.APPLICATIONS.Downtime.longRest.tendToWounds.description'),
            actions: {
                tendToWounds: {
                    type: 'healing',
                    systemPath: 'restMoves.longRest.moves.tendToWounds.actions',
                    name: game.i18n.localize('DAGGERHEART.APPLICATIONS.Downtime.longRest.tendToWounds.name'),
                    img: 'icons/magic/life/cross-worn-green.webp',
                    actionType: 'action',
                    chatDisplay: false,
                    healing: {
                        applyTo: healingTypes.hitPoints.id,
                        value: {
                            custom: {
                                enabled: true,
                                formula: '@system.resources.hitPoints.max'
                            }
                        }
                    }
                }
            }
        },
        clearStress: {
            id: 'clearStress',
            name: game.i18n.localize('DAGGERHEART.APPLICATIONS.Downtime.longRest.clearStress.name'),
            icon: 'fa-regular fa-face-surprise',
            img: 'icons/magic/perception/eye-ringed-green.webp',
            description: game.i18n.localize('DAGGERHEART.APPLICATIONS.Downtime.longRest.clearStress.description'),
            actions: {
                clearStress: {
                    type: 'healing',
                    systemPath: 'restMoves.longRest.moves.clearStress.actions',
                    name: game.i18n.localize('DAGGERHEART.APPLICATIONS.Downtime.longRest.clearStress.name'),
                    img: 'icons/magic/perception/eye-ringed-green.webp',
                    actionType: 'action',
                    chatDisplay: false,
                    healing: {
                        applyTo: healingTypes.stress.id,
                        value: {
                            custom: {
                                enabled: true,
                                formula: '@system.resources.stress.max'
                            }
                        }
                    }
                }
            }
        },
        repairArmor: {
            id: 'repairArmor',
            name: game.i18n.localize('DAGGERHEART.APPLICATIONS.Downtime.longRest.repairArmor.name'),
            icon: 'fa-solid fa-hammer',
            img: 'icons/skills/trades/smithing-anvil-silver-red.webp',
            description: game.i18n.localize('DAGGERHEART.APPLICATIONS.Downtime.longRest.repairArmor.description'),
            actions: {
                repairArmor: {
                    type: 'healing',
                    systemPath: 'restMoves.longRest.moves.repairArmor.actions',
                    name: game.i18n.localize('DAGGERHEART.APPLICATIONS.Downtime.longRest.repairArmor.name'),
                    img: 'icons/skills/trades/smithing-anvil-silver-red.webp',
                    actionType: 'action',
                    chatDisplay: false,
                    healing: {
                        applyTo: healingTypes.armorSlot.id,
                        value: {
                            custom: {
                                enabled: true,
                                formula: '@system.armorScore'
                            }
                        }
                    }
                }
            }
        },
        prepare: {
            id: 'prepare',
            name: game.i18n.localize('DAGGERHEART.APPLICATIONS.Downtime.longRest.prepare.name'),
            icon: 'fa-solid fa-dumbbell',
            img: 'icons/skills/trades/academics-merchant-scribe.webp',
            description: game.i18n.localize('DAGGERHEART.APPLICATIONS.Downtime.longRest.prepare.description'),
            actions: {}
        },
        workOnAProject: {
            id: 'workOnAProject',
            name: game.i18n.localize('DAGGERHEART.APPLICATIONS.Downtime.longRest.workOnAProject.name'),
            icon: 'fa-solid fa-diagram-project',
            img: 'icons/skills/social/thumbsup-approval-like.webp',
            description: game.i18n.localize('DAGGERHEART.APPLICATIONS.Downtime.longRest.workOnAProject.description'),
            actions: {}
        }
    })
};

export const deathMoves = {
    avoidDeath: {
        id: 'avoidDeath',
        name: 'DAGGERHEART.CONFIG.DeathMoves.avoidDeath.name',
        img: 'icons/magic/time/hourglass-yellow-green.webp',
        icon: 'fa-person-running',
        description: 'DAGGERHEART.CONFIG.DeathMoves.avoidDeath.description'
    },
    riskItAll: {
        id: 'riskItAll',
        name: 'DAGGERHEART.CONFIG.DeathMoves.riskItAll.name',
        img: 'icons/sundries/gaming/dice-pair-white-green.webp',
        icon: 'fa-dice',
        description: 'DAGGERHEART.CONFIG.DeathMoves.riskItAll.description'
    },
    blazeOfGlory: {
        id: 'blazeOfGlory',
        name: 'DAGGERHEART.CONFIG.DeathMoves.blazeOfGlory.name',
        img: 'icons/magic/life/heart-cross-strong-flame-purple-orange.webp',
        icon: 'fa-burst',
        description: 'DAGGERHEART.CONFIG.DeathMoves.blazeOfGlory.description'
    }
};

export const tiers = {
    1: {
        id: 1,
        label: 'DAGGERHEART.GENERAL.Tiers.1'
    },
    2: {
        id: 2,
        label: 'DAGGERHEART.GENERAL.Tiers.2'
    },
    3: {
        id: 3,
        label: 'DAGGERHEART.GENERAL.Tiers.3'
    },
    4: {
        id: 4,
        label: 'DAGGERHEART.GENERAL.Tiers.4'
    }
};

export const diceTypes = {
    d4: 'd4',
    d6: 'd6',
    d8: 'd8',
    d10: 'd10',
    d12: 'd12',
    d20: 'd20'
};

export const multiplierTypes = {
    prof: 'Proficiency',
    cast: 'Spellcast',
    scale: 'Cost Scaling',
    result: 'Roll Result',
    flat: 'Flat'
};

export const diceSetNumbers = {
    prof: 'Proficiency',
    cast: 'Spellcast',
    scale: 'Cost Scaling',
    flat: 'Flat'
};

export const getDiceSoNicePresets = async (hopeFaces, fearFaces, advantageFaces = 'd6', disadvantageFaces = 'd6') => {
    const { diceSoNice } = game.settings.get(CONFIG.DH.id, CONFIG.DH.SETTINGS.gameSettings.appearance);
    const getPreset = async (type, faces) => {
        const system = game.dice3d.DiceFactory.systems.get(type.system).dice.get(faces);
        if (!system.modelLoaded) {
            await system.loadModel(game.dice3d.DiceFactory.loaderGLTF);
        }

        return {
            modelFile: system.modelFile,
            appearance: {
                ...system.appearance,
                ...type
            }
        };
    };

    return {
        hope: await getPreset(diceSoNice.hope, hopeFaces),
        fear: await getPreset(diceSoNice.fear, fearFaces),
        advantage: await getPreset(diceSoNice.advantage, advantageFaces),
        disadvantage: await getPreset(diceSoNice.disadvantage, disadvantageFaces)
    };
};

export const refreshTypes = {
    session: {
        id: 'session',
        label: 'DAGGERHEART.GENERAL.RefreshType.session'
    },
    shortRest: {
        id: 'shortRest',
        label: 'DAGGERHEART.GENERAL.RefreshType.shortrest'
    },
    longRest: {
        id: 'longRest',
        label: 'DAGGERHEART.GENERAL.RefreshType.longrest'
    }
};

export const abilityCosts = {
    hitPoints: {
        id: 'hitPoints',
        label: 'DAGGERHEART.CONFIG.HealingType.hitPoints.name',
        group: 'Global'
    },
    stress: {
        id: 'stress',
        label: 'DAGGERHEART.CONFIG.HealingType.stress.name',
        group: 'Global'
    },
    hope: {
        id: 'hope',
        label: 'Hope',
        group: 'TYPES.Actor.character'
    },
    armor: {
        id: 'armor',
        label: 'Armor Slot',
        group: 'TYPES.Actor.character'
    },
    fear: {
        id: 'fear',
        label: 'Fear',
        group: 'TYPES.Actor.adversary'
    }
};

export const countdownTypes = {
    spotlight: {
        id: 'spotlight',
        label: 'DAGGERHEART.CONFIG.CountdownType.spotlight'
    },
    characterAttack: {
        id: 'characterAttack',
        label: 'DAGGERHEART.CONFIG.CountdownType.characterAttack'
    },
    custom: {
        id: 'custom',
        label: 'DAGGERHEART.CONFIG.CountdownType.custom'
    }
};
export const rollTypes = {
    attack: {
        id: 'attack',
        label: 'DAGGERHEART.CONFIG.RollTypes.attack.name'
    },
    spellcast: {
        id: 'spellcast',
        label: 'DAGGERHEART.CONFIG.RollTypes.spellcast.name',
        playerOnly: true
    },
    trait: {
        id: 'trait',
        label: 'DAGGERHEART.CONFIG.RollTypes.trait.name',
        playerOnly: true
    },
    diceSet: {
        id: 'diceSet',
        label: 'DAGGERHEART.CONFIG.RollTypes.diceSet.name'
    }
};

export const fearDisplay = {
    token: { value: 'token', label: 'DAGGERHEART.SETTINGS.Appearance.fearDisplay.token' },
    bar: { value: 'bar', label: 'DAGGERHEART.SETTINGS.Appearance.fearDisplay.bar' },
    hide: { value: 'hide', label: 'DAGGERHEART.SETTINGS.Appearance.fearDisplay.hide' }
};
