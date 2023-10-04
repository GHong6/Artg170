class Room1 extends AdventureScene {
    constructor() {
        super("Room1", "First Room");
    }

    preload(){
        this.load.path = "./assets/";
        this.load.image('s1', 'S1.png');
        this.load.image('s2', 'S2.png');
        this.load.image('s3', 'S3.png');
        this.load.image('s4', 'S4.png');
        this.load.image('s5', 'S5.png');
        
    }

    create() {

        this.time.delayedCall(100, () => {
            this.s1 = this.add.image(
                100,
                270,
                's1',
            )
            this.s1.setScale(.5)
            .setInteractive() 
            .on('pointerdown', () => {
                    this.s1.setTint(0xff0000); // Red tint
                    this.time.delayedCall(2000, () => {
                    this.gotoScene('Room2');
                    });
        
            })
            this.s1.alpha = 0;
            this.tweens.add({
                        targets: this.s1,
                        alpha: 1,
                        duration: 1000,
                        ease: 'Linear'
                      });
        });

        
        this.time.delayedCall(200, () => {
            this.s2 = this.add.image(
                270,
                270,
                's2',
            )
            this.s2.setScale(.5)
            .setInteractive()
            .on('pointerdown', () => {
                this.s2.setTint(0xff0000); // Red tint
                this.time.delayedCall(2000, () => {
                this.gotoScene('Room2');
                });
        
            })
            this.s2.alpha = 0;
            this.tweens.add({
                        targets: this.s2,
                        alpha: 1,
                        duration: 1000,
                        ease: 'Linear'
                      });
        });

        this.time.delayedCall(300, () => {
            this.s3 = this.add.image(
                440,
                270,
                's3',
            )
            this.s3.setScale(.5)
            .setInteractive()
            .on('pointerdown', () => {
                this.s3.setTint(0xff0000); // Red tint
                this.time.delayedCall(2000, () => {
                this.gotoScene('Room2');
                });
        
            })
            this.s3.alpha = 0;
            this.tweens.add({
                        targets: this.s3,
                        alpha: 1,
                        duration: 1000,
                        ease: 'Linear'
                      });
        });

        this.time.delayedCall(400, () => {
            this.s4 = this.add.image(
                610,
                270, 
                's4',
            )
            this.s4.setScale(.5)
            .setInteractive()
            .on('pointerdown', () => {
                this.s4.setTint(0x2bff64); 
                this.time.delayedCall(2000, () => {
                this.gotoScene('Room2');
                });
        
            })
            this.s4.alpha = 0;
            this.tweens.add({
                        targets: this.s4,
                        alpha: 1,
                        duration: 1000,
                        ease: 'Linear'
                      });
        });

        this.time.delayedCall(500, () => {
            this.s5 = this.add.image(
                780,
                270, 
                's5',
            )
            this.s5.setScale(.5)
            .setInteractive()
            .on('pointerdown', () => {
                this.s5.setTint(0xff0000); 
                this.time.delayedCall(2000, () => {
                this.gotoScene('Room2');
                });
        
            })
            this.s5.alpha = 0;
            this.tweens.add({
                        targets: this.s5,
                        alpha: 1,
                        duration: 1000,
                        ease: 'Linear'
                      });
        });



        this.time.delayedCall(1000, () => {
            let textObject = this.add.text(440,100, "Question 1").setFontSize(50);
            textObject.setOrigin(0.5);
            textObject.alpha = 0;

            this.tweens.add({
                targets: textObject,
                alpha: 1,
                duration: 1000,
                ease: 'Linear'
              });
        });

        
    }
}

class Room2 extends AdventureScene {
    constructor() {
        super("Room2", "Room 2");
    }

    preload(){
        this.load.path = "./assets/";
        this.load.image('q1', 'q1.png');
        this.load.image('q2', 'q2.png');
        this.load.image('q3', 'q3.png');
        this.load.image('q4', 'q4.png');
        this.load.image('q5', 'q5.png');


    }
    create() {

        this.time.delayedCall(100, () => {
            this.q1 = this.add.image(
                100,
                270,
                'q1',
            )
            this.q1.setScale(.5)
            .setInteractive() 
            .on('pointerdown', () => {
                    this.q1.setTint(0xff0000); // Red tint
                    this.time.delayedCall(2000, () => {
                    this.gotoScene('Room3');
                    });
        
            })
            this.q1.alpha = 0;
            this.tweens.add({
                        targets: this.q1,
                        alpha: 1,
                        duration: 1000,
                        ease: 'Linear'
                      });
        });

        
        this.time.delayedCall(200, () => {
            this.q2 = this.add.image(
                270,
                270,
                'q2',
            )
            this.q2.setScale(.5)
            .setInteractive()
            .on('pointerdown', () => {
                this.q2.setTint(0xff0000); // Red tint
                this.time.delayedCall(2000, () => {
                this.gotoScene('Room3');
                });
        
            })
            this.q2.alpha = 0;
            this.tweens.add({
                        targets: this.q2,
                        alpha: 1,
                        duration: 1000,
                        ease: 'Linear'
                      });
        });

        this.time.delayedCall(300, () => {
            this.q3 = this.add.image(
                440,
                270,
                'q3',
            )
            this.q3.setScale(.5)
            .setInteractive()
            .on('pointerdown', () => {
                this.q3.setTint(0x2bff64); // Red tint
                this.time.delayedCall(2000, () => {
                this.gotoScene('Room3');
                });
        
            })
            this.q3.alpha = 0;
            this.tweens.add({
                        targets: this.q3,
                        alpha: 1,
                        duration: 1000,
                        ease: 'Linear'
                      });
        });

        this.time.delayedCall(400, () => {
            this.q4 = this.add.image(
                610,
                270, 
                'q4',
            )
            this.q4.setScale(.5)
            .setInteractive()
            .on('pointerdown', () => {
                this.q4.setTint(0xff0000); 
                this.time.delayedCall(2000, () => {
                this.gotoScene('Room3');
                });
        
            })
            this.q4.alpha = 0;
            this.tweens.add({
                        targets: this.q4,
                        alpha: 1,
                        duration: 1000,
                        ease: 'Linear'
                      });
        });

        this.time.delayedCall(500, () => {
            this.q5 = this.add.image(
                780,
                270, 
                'q5',
            )
            this.q5.setScale(.5)
            .setInteractive()
            .on('pointerdown', () => {
                this.q5.setTint(0xff0000); 
                this.time.delayedCall(2000, () => {
                this.gotoScene('Room3');
                });
        
            })
            this.q5.alpha = 0;
            this.tweens.add({
                        targets: this.q5,
                        alpha: 1,
                        duration: 1000,
                        ease: 'Linear'
                      });
        });



        this.time.delayedCall(1000, () => {
            let textObject = this.add.text(440,100, "Question 2").setFontSize(50);
            textObject.setOrigin(0.5);
            textObject.alpha = 0;

            this.tweens.add({
                targets: textObject,
                alpha: 1,
                duration: 1000,
                ease: 'Linear'
              });
        });

        
    }
    
}


//////////////////////////////////////////////////////////////////////////////////////////
class Room3 extends AdventureScene {
    constructor() {
        super("Room3", "Room 3");
    }

    preload(){
        this.load.path = "./assets/";
        this.load.image('w1', 'w1.png');
        this.load.image('w2', 'w2.png');
        this.load.image('w3', 'w3.png');
        this.load.image('w4', 'w4.png');
        this.load.image('w5', 'w5.png');


    }
    create() {

        this.time.delayedCall(100, () => {
            this.w1 = this.add.image(
                100,
                270,
                'w1',
            )
            this.w1.setScale(.5)
            .setInteractive() 
            .on('pointerdown', () => {
                    this.w1.setTint(0xff0000); // Red tint
                    this.time.delayedCall(2000, () => {
                    this.gotoScene('Room4');
                    });
        
            })
            this.w1.alpha = 0;
            this.tweens.add({
                        targets: this.w1,
                        alpha: 1,
                        duration: 1000,
                        ease: 'Linear'
                      });
        });

        
        this.time.delayedCall(200, () => {
            this.w2 = this.add.image(
                270,
                270,
                'w2',
            )
            this.w2.setScale(.5)
            .setInteractive()
            .on('pointerdown', () => {
                this.w2.setTint(0x2bff64); // Red tint
                this.time.delayedCall(2000, () => {
                this.gotoScene('Room4');
                });
        
            })
            this.w2.alpha = 0;
            this.tweens.add({
                        targets: this.w2,
                        alpha: 1,
                        duration: 1000,
                        ease: 'Linear'
                      });
        });

        this.time.delayedCall(300, () => {
            this.w3 = this.add.image(
                440,
                270,
                'w3',
            )
            this.w3.setScale(.5)
            .setInteractive()
            .on('pointerdown', () => {
                this.w3.setTint(0xff0000); // Red tint
                this.time.delayedCall(2000, () => {
                this.gotoScene('Room4');
                });
        
            })
            this.w3.alpha = 0;
            this.tweens.add({
                        targets: this.w3,
                        alpha: 1,
                        duration: 1000,
                        ease: 'Linear'
                      });
        });

        this.time.delayedCall(400, () => {
            this.w4 = this.add.image(
                610,
                270, 
                'w4',
            )
            this.w4.setScale(.5)
            .setInteractive()
            .on('pointerdown', () => {
                this.w4.setTint(0xff0000); 
                this.time.delayedCall(2000, () => {
                this.gotoScene('Room4');
                });
        
            })
            this.w4.alpha = 0;
            this.tweens.add({
                        targets: this.w4,
                        alpha: 1,
                        duration: 1000,
                        ease: 'Linear'
                      });
        });

        this.time.delayedCall(500, () => {
            this.w5 = this.add.image(
                780,
                270, 
                'w5',
            )
            this.w5.setScale(.5)
            .setInteractive()
            .on('pointerdown', () => {
                this.w5.setTint(0xff0000); 
                this.time.delayedCall(2000, () => {
                this.gotoScene('Room4');
                });
        
            })
            this.w5.alpha = 0;
            this.tweens.add({
                        targets: this.w5,
                        alpha: 1,
                        duration: 1000,
                        ease: 'Linear'
                      });
        });



        this.time.delayedCall(1000, () => {
            let textObject = this.add.text(440,100, "Question 3").setFontSize(50);
            textObject.setOrigin(0.5);
            textObject.alpha = 0;

            this.tweens.add({
                targets: textObject,
                alpha: 1,
                duration: 1000,
                ease: 'Linear'
              });
        });

        
    }
    
}

class Room4 extends AdventureScene {
    constructor() {
        super("Room4", "Room 4");
    }

    preload(){
        this.load.path = "./assets/";
        this.load.image('e1', 'e1.png');
        this.load.image('e2', 'e2.png');
        this.load.image('e3', 'e3.png');
        this.load.image('e4', 'e4.png');
        this.load.image('e5', 'e5.png');


    }
    create() {

        this.time.delayedCall(100, () => {
            this.e1 = this.add.image(
                100,
                270,
                'e1',
            )
            this.e1.setScale(.5)
            .setInteractive() 
            .on('pointerdown', () => {
                    this.e1.setTint(0xff0000); // Red tint
                    this.time.delayedCall(2000, () => {
                    this.gotoScene('Room5');
                    });
        
            })
            this.e1.alpha = 0;
            this.tweens.add({
                        targets: this.e1,
                        alpha: 1,
                        duration: 1000,
                        ease: 'Linear'
                      });
        });

        
        this.time.delayedCall(200, () => {
            this.e2 = this.add.image(
                270,
                270,
                'e2',
            )
            this.e2.setScale(.5)
            .setInteractive()
            .on('pointerdown', () => {
                this.e2.setTint(0x2bff64); // Red tint
                this.time.delayedCall(2000, () => {
                this.gotoScene('Room5');
                });
        
            })
            this.e2.alpha = 0;
            this.tweens.add({
                        targets: this.e2,
                        alpha: 1,
                        duration: 1000,
                        ease: 'Linear'
                      });
        });

        this.time.delayedCall(300, () => {
            this.e3 = this.add.image(
                440,
                270,
                'e3',
            )
            this.e3.setScale(.5)
            .setInteractive()
            .on('pointerdown', () => {
                this.e3.setTint(0xff0000); // Red tint
                this.time.delayedCall(2000, () => {
                this.gotoScene('Room5');
                });
        
            })
            this.e3.alpha = 0;
            this.tweens.add({
                        targets: this.e3,
                        alpha: 1,
                        duration: 1000,
                        ease: 'Linear'
                      });
        });

        this.time.delayedCall(400, () => {
            this.e4 = this.add.image(
                610,
                270, 
                'e4',
            )
            this.e4.setScale(.5)
            .setInteractive()
            .on('pointerdown', () => {
                this.e4.setTint(0xff0000); 
                this.time.delayedCall(2000, () => {
                this.gotoScene('Room5');
                });
        
            })
            this.e4.alpha = 0;
            this.tweens.add({
                        targets: this.e4,
                        alpha: 1,
                        duration: 1000,
                        ease: 'Linear'
                      });
        });

        this.time.delayedCall(500, () => {
            this.e5 = this.add.image(
                780,
                270, 
                'e5',
            )
            this.e5.setScale(.5)
            .setInteractive()
            .on('pointerdown', () => {
                this.e5.setTint(0x2bff64); 
                this.time.delayedCall(2000, () => {
                this.gotoScene('Room5');
                });
        
            })
            this.e5.alpha = 0;
            this.tweens.add({
                        targets: this.e5,
                        alpha: 1,
                        duration: 1000,
                        ease: 'Linear'
                      });
        });



        this.time.delayedCall(1000, () => {
            let textObject = this.add.text(440,100, "Question 4").setFontSize(50);
            textObject.setOrigin(0.5);
            textObject.alpha = 0;

            this.tweens.add({
                targets: textObject,
                alpha: 1,
                duration: 1000,
                ease: 'Linear'
              });
        });

        
    }
    
}

class Room5 extends AdventureScene {
    constructor() {
        super("Room5", "Room 5");
    }

    preload(){
        this.load.path = "./assets/";
        this.load.image('a1', 'a1.png');
        this.load.image('a2', 'a2.png');
        this.load.image('a3', 'a3.png');
        this.load.image('a4', 'a4.png');
        this.load.image('a5', 'a5.png');


    }
    create() {

        this.time.delayedCall(100, () => {
            this.a1 = this.add.image(
                100,
                270,
                'a1',
            )
            this.a1.setScale(.5)
            .setInteractive() 
            .on('pointerdown', () => {
                    this.a1.setTint(0x2bff64); // Red tint
                    this.time.delayedCall(2000, () => {
                    this.gotoScene('Room6');
                    });
        
            })
            this.a1.alpha = 0;
            this.tweens.add({
                        targets: this.a1,
                        alpha: 1,
                        duration: 1000,
                        ease: 'Linear'
                      });
        });

        
        this.time.delayedCall(200, () => {
            this.a2 = this.add.image(
                270,
                270,
                'a2',
            )
            this.a2.setScale(.5)
            .setInteractive()
            .on('pointerdown', () => {
                this.a2.setTint(0xff0000); // Red tint
                this.time.delayedCall(2000, () => {
                this.gotoScene('Room6');
                });
        
            })
            this.a2.alpha = 0;
            this.tweens.add({
                        targets: this.a2,
                        alpha: 1,
                        duration: 1000,
                        ease: 'Linear'
                      });
        });

        this.time.delayedCall(300, () => {
            this.a3 = this.add.image(
                440,
                270,
                'a3',
            )
            this.a3.setScale(.5)
            .setInteractive()
            .on('pointerdown', () => {
                this.a3.setTint(0xff0000); // Red tint
                this.time.delayedCall(2000, () => {
                this.gotoScene('Room6');
                });
        
            })
            this.a3.alpha = 0;
            this.tweens.add({
                        targets: this.a3,
                        alpha: 1,
                        duration: 1000,
                        ease: 'Linear'
                      });
        });

        this.time.delayedCall(400, () => {
            this.a4 = this.add.image(
                610,
                270, 
                'a4',
            )
            this.a4.setScale(.5)
            .setInteractive()
            .on('pointerdown', () => {
                this.a4.setTint(0xff0000); 
                this.time.delayedCall(2000, () => {
                this.gotoScene('Room6');
                });
        
            })
            this.a4.alpha = 0;
            this.tweens.add({
                        targets: this.a4,
                        alpha: 1,
                        duration: 1000,
                        ease: 'Linear'
                      });
        });

        this.time.delayedCall(500, () => {
            this.a5 = this.add.image(
                780,
                270, 
                'a5',
            )
            this.a5.setScale(.5)
            .setInteractive()
            .on('pointerdown', () => {
                this.a5.setTint(0x2bff64); 
                this.time.delayedCall(2000, () => {
                this.gotoScene('Room6');
                });
        
            })
            this.a5.alpha = 0;
            this.tweens.add({
                        targets: this.a5,
                        alpha: 1,
                        duration: 1000,
                        ease: 'Linear'
                      });
        });



        this.time.delayedCall(1000, () => {
            let textObject = this.add.text(440,100, "Question 5").setFontSize(50);
            textObject.setOrigin(0.5);
            textObject.alpha = 0;

            this.tweens.add({
                targets: textObject,
                alpha: 1,
                duration: 1000,
                ease: 'Linear'
              });
        });

        
    }
    
}

class Room6 extends AdventureScene {
    constructor() {
        super("Room6", "Room 6");
    }

    preload(){
        this.load.path = "./assets/";
        this.load.image('a1', 'a1.png');
        this.load.image('a2', 'a2.png');
        this.load.image('a3', 'a3.png');
        this.load.image('a4', 'a4.png');
        this.load.image('a5', 'a5.png');


    }
    create() {
        
    }
    
}


class Intro extends Phaser.Scene {
    constructor() {
        super('intro')
    }

    preload(){
        this.load.path = "./assets/";
        this.load.video("intro", "intro.mp4");

    }

    create() {

        this.input.on('pointerdown', () => this.scene.start('Room1'));
        const video = this.add.video(400, 300, "intro");
        video.play();

        video.on('complete', () => {
            this.textObject8 = this.add.text(
                440, //x
                270,//y
                "Click", //text
                {
                    font: "30px",
                    color: "#FFFFFF",
                    align: "center"
                } //style
            );
            this.input.on('pointerdown', () => this.scene.start('Room1'));
        });
    }
}

class Outro extends Phaser.Scene {
    constructor() {
        super('Outro');
    }

    preload(){
        this.load.path = "./assets/";
        this.load.image('ouside', 'ouside.png');
    }
    
    create() {
        const roombg = this.add.image(0, 0, 'ouside');
        roombg.setOrigin(0);
        roombg.setDepth(0);
        roombg.setScale(4);

        this.time.delayedCall(2900, () => {
            let textObject = this.add.text(960,600, "You escaped the cursed building.").setFontSize(100);
            textObject.setOrigin(0.5);
            textObject.alpha = 0;

            this.tweens.add({
                targets: textObject,
                alpha: 1,
                duration: 1000,
                ease: 'Linear'
              });
        });

        this.time.delayedCall(2900, () => {
            let textObject = this.add.text(960,700, "Click anywhere to restart.").setFontSize(100);
            textObject.setOrigin(0.5);
            textObject.alpha = 0;

            this.tweens.add({
                targets: textObject,
                alpha: 1,
                duration: 1000,
                ease: 'Linear'
              });
              this.input.on('pointerdown', () => this.scene.start('intro'));
        });
    }
}




const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 880,
        height: 540
    },
    scene: [Intro, Room1, Room2, Room3, Room4, Room5, Room6, Outro],
    title: "Adventure Game",
});

