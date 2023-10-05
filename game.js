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
        this.load.audio('hum','Hum.mp3');
        this.load.audio('click','click.mp3');
        
    }

    create() {
        this.music = this.sound.add('click');
        this.music.setLoop(false);
        
        //this.music.play();

        this.time.delayedCall(500, () => {
            this.s1 = this.add.image(
                100,
                270,
                's1',
            )
            this.s1.setScale(.5)
            .setInteractive() 
            .on('pointerdown', () => {
                    this.s1.setTint(0xff0000); // Red tint
                    this.music.play();
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

        
        this.time.delayedCall(600, () => {
            this.s2 = this.add.image(
                270,
                270,
                's2',
            )
            this.s2.setScale(.5)
            .setInteractive()
            .on('pointerdown', () => {
                this.s2.setTint(0xff0000); // Red tint
                this.music.play();
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

        this.time.delayedCall(700, () => {
            this.s3 = this.add.image(
                440,
                270,
                's3',
            )
            this.s3.setScale(.5)
            .setInteractive()
            .on('pointerdown', () => {
                this.s3.setTint(0xff0000); // Red tint
                this.music.play();
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

        this.time.delayedCall(800, () => {
            this.s4 = this.add.image(
                610,
                270, 
                's4',
            )
            this.s4.setScale(.5)
            .setInteractive()
            .on('pointerdown', () => {
                this.s4.setTint(0x2bff64); 
                this.music.play();
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

        this.time.delayedCall(900, () => {
            this.s5 = this.add.image(
                780,
                270, 
                's5',
            )
            this.s5.setScale(.5)
            .setInteractive()
            .on('pointerdown', () => {
                this.s5.setTint(0xff0000); 
                this.music.play();
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



        this.time.delayedCall(200, () => {
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
        this.time.delayedCall(200, () => {
            let textObject = this.add.text(440,150, "Choose the anomaly").setFontSize(35);
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
        this.load.audio('click','click.mp3');


    }
    create() {
        this.music = this.sound.add('click');
        this.music.setLoop(false);

        this.time.delayedCall(500, () => {
            this.q1 = this.add.image(
                100,
                270,
                'q1',
            )
            this.q1.setScale(.5)
            .setInteractive() 
            .on('pointerdown', () => {
                    this.q1.setTint(0xff0000); // Red tint
                    this.music.play();
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

        
        this.time.delayedCall(600, () => {
            this.q2 = this.add.image(
                270,
                270,
                'q2',
            )
            this.q2.setScale(.5)
            .setInteractive()
            .on('pointerdown', () => {
                this.q2.setTint(0xff0000); // Red tint
                this.music.play();
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

        this.time.delayedCall(700, () => {
            this.q3 = this.add.image(
                440,
                270,
                'q3',
            )
            this.q3.setScale(.5)
            .setInteractive()
            .on('pointerdown', () => {
                this.q3.setTint(0x2bff64); // Red tint
                this.music.play();
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

        this.time.delayedCall(800, () => {
            this.q4 = this.add.image(
                610,
                270, 
                'q4',
            )
            this.q4.setScale(.5)
            .setInteractive()
            .on('pointerdown', () => {
                this.q4.setTint(0xff0000); 
                this.music.play();
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

        this.time.delayedCall(900, () => {
            this.q5 = this.add.image(
                780,
                270, 
                'q5',
            )
            this.q5.setScale(.5)
            .setInteractive()
            .on('pointerdown', () => {
                this.q5.setTint(0xff0000); 
                this.music.play();
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



        this.time.delayedCall(200, () => {
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
        this.time.delayedCall(200, () => {
            let textObject = this.add.text(440,150, "Choose the anomaly").setFontSize(35);
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
        this.load.audio('click','click.mp3');


    }
    create() {
        this.music = this.sound.add('click');
        this.music.setLoop(false);

        this.time.delayedCall(500, () => {
            this.w1 = this.add.image(
                100,
                270,
                'w1',
            )
            this.w1.setScale(.5)
            .setInteractive() 
            .on('pointerdown', () => {
                    this.w1.setTint(0xff0000); // Red tint
                    this.music.play();
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

        
        this.time.delayedCall(600, () => {
            this.w2 = this.add.image(
                270,
                270,
                'w2',
            )
            this.w2.setScale(.5)
            .setInteractive()
            .on('pointerdown', () => {
                this.w2.setTint(0x2bff64); // Red tint
                this.music.play();
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

        this.time.delayedCall(700, () => {
            this.w3 = this.add.image(
                440,
                270,
                'w3',
            )
            this.w3.setScale(.5)
            .setInteractive()
            .on('pointerdown', () => {
                this.w3.setTint(0xff0000); // Red tint
                this.music.play();
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

        this.time.delayedCall(800, () => {
            this.w4 = this.add.image(
                610,
                270, 
                'w4',
            )
            this.w4.setScale(.5)
            .setInteractive()
            .on('pointerdown', () => {
                this.w4.setTint(0xff0000); 
                this.music.play();
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

        this.time.delayedCall(900, () => {
            this.w5 = this.add.image(
                780,
                270, 
                'w5',
            )
            this.w5.setScale(.5)
            .setInteractive()
            .on('pointerdown', () => {
                this.w5.setTint(0xff0000); 
                this.music.play();
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



        this.time.delayedCall(200, () => {
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
        this.time.delayedCall(200, () => {
            let textObject = this.add.text(440,150, "Choose the anomaly").setFontSize(35);
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
        this.load.audio('click','click.mp3');


    }
    create() {
        this.music = this.sound.add('click');
        this.music.setLoop(false);

        this.time.delayedCall(500, () => {
            this.e1 = this.add.image(
                100,
                270,
                'e1',
            )
            this.e1.setScale(.5)
            .setInteractive() 
            .on('pointerdown', () => {
                    this.e1.setTint(0xff0000); // Red tint
                    this.music.play();
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

        
        this.time.delayedCall(600, () => {
            this.e2 = this.add.image(
                270,
                270,
                'e2',
            )
            this.e2.setScale(.5)
            .setInteractive()
            .on('pointerdown', () => {
                this.e2.setTint(0xff0000); // Red tint
                this.music.play();
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

        this.time.delayedCall(700, () => {
            this.e3 = this.add.image(
                440,
                270,
                'e3',
            )
            this.e3.setScale(.5)
            .setInteractive()
            .on('pointerdown', () => {
                this.e3.setTint(0xff0000); // Red tint
                this.music.play();
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

        this.time.delayedCall(800, () => {
            this.e4 = this.add.image(
                610,
                270, 
                'e4',
            )
            this.e4.setScale(.5)
            .setInteractive()
            .on('pointerdown', () => {
                this.e4.setTint(0xff0000); 
                this.music.play();
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

        this.time.delayedCall(900, () => {
            this.e5 = this.add.image(
                780,
                270, 
                'e5',
            )
            this.e5.setScale(.5)
            .setInteractive()
            .on('pointerdown', () => {
                this.e5.setTint(0x2bff64); 
                this.music.play();
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



        this.time.delayedCall(200, () => {
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
        this.time.delayedCall(200, () => {
            let textObject = this.add.text(440,150, "Choose the anomaly").setFontSize(35);
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
        this.load.audio('click','click.mp3');


    }
    create() {
        this.music = this.sound.add('click');
        this.music.setLoop(false);

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
                    this.music.play();
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
                this.music.play();
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
                this.music.play();
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
                this.music.play();
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
                this.a5.setTint(0xff0000); 
                this.music.play();
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



        this.time.delayedCall(200, () => {
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
        this.time.delayedCall(200, () => {
            let textObject = this.add.text(440,150, "Choose the anomaly").setFontSize(35);
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
        this.load.image('r1', 'r1.png');
        this.load.image('trust', 'trust.png');
        this.load.image('threat', 'threat.png');
        this.load.audio('click','click.mp3');

    }
    create() {
        
        this.music = this.sound.add('click');
        this.music.setLoop(false);

        this.time.delayedCall(500, () => {
            this.trust = this.add.image(
                640,
                400, 
                'trust',
            )
            .setInteractive()
            .on('pointerdown', () => {
                this.trust.setTint(0x2bff64); 
                this.music.play();
                this.time.delayedCall(2000, () => {
                this.gotoScene('Room7');
                });
        
            })
            this.trust.alpha = 0;
            this.tweens.add({
                        targets: this.trust,
                        alpha: 1,
                        duration: 1000,
                        ease: 'Linear'
                      });
        });

        this.time.delayedCall(500, () => {
            this.threat = this.add.image(
                240,
                400, 
                'threat',
            )
            .setInteractive()
            .on('pointerdown', () => {
                this.threat.setTint(0xff0000); 
                this.music.play();
                this.time.delayedCall(2000, () => {
                this.gotoScene('Room7');
                });
        
            })
            this.threat.alpha = 0;
            this.tweens.add({
                        targets: this.threat,
                        alpha: 1,
                        duration: 1000,
                        ease: 'Linear'
                      });
        });
        
        this.time.delayedCall(500, () => {
            this.r1 = this.add.image(
                440,
                170, 
                'r1',
            )
            this.r1.setScale(.25)
            this.r1.alpha = 0;
            this.tweens.add({
                        targets: this.r1,
                        alpha: 1,
                        duration: 1000,
                        ease: 'Linear'
                      });
        });
        
    }


    
}

class Room7 extends AdventureScene {
    constructor() {
        super("Room7", "Room 7");
    }

    preload(){
        this.load.path = "./assets/";
        this.load.image('r3', 'r3.png');
        this.load.image('trust', 'trust.png');
        this.load.image('threat', 'threat.png');
        this.load.audio('click','click.mp3');

    }
    create() {
        
        this.music = this.sound.add('click');
        this.music.setLoop(false);

        this.time.delayedCall(500, () => {
            this.trust = this.add.image(
                640,
                400, 
                'trust',
            )
            .setInteractive()
            .on('pointerdown', () => {
                this.trust.setTint(0xff0000); 
                this.music.play();
                this.time.delayedCall(2000, () => {
                this.gotoScene('Room8');
                });
        
            })
            this.trust.alpha = 0;
            this.tweens.add({
                        targets: this.trust,
                        alpha: 1,
                        duration: 1000,
                        ease: 'Linear'
                      });
        });

        this.time.delayedCall(500, () => {
            this.threat = this.add.image(
                240,
                400, 
                'threat',
            )
            .setInteractive()
            .on('pointerdown', () => {
                this.threat.setTint(0x2bff64); 
                this.music.play();
                this.time.delayedCall(2000, () => {
                this.gotoScene('Room8');
                });
        
            })
            this.threat.alpha = 0;
            this.tweens.add({
                        targets: this.threat,
                        alpha: 1,
                        duration: 1000,
                        ease: 'Linear'
                      });
        });
        
        this.time.delayedCall(500, () => {
            this.r3 = this.add.image(
                440,
                170, 
                'r3',
            )
            this.r3.setScale(.25)
            this.r3.alpha = 0;
            this.tweens.add({
                        targets: this.r3,
                        alpha: 1,
                        duration: 1000,
                        ease: 'Linear'
                      });
        });
        
    }


    
}

class Room8 extends AdventureScene {
    constructor() {
        super("Room8", "Room 8");
    }

    preload(){
        this.load.path = "./assets/";
        this.load.image('r2', 'r2.png');
        this.load.image('trust', 'trust.png');
        this.load.image('threat', 'threat.png');
        this.load.audio('click','click.mp3');

    }
    create() {
        
        this.music = this.sound.add('click');
        this.music.setLoop(false);

        this.time.delayedCall(500, () => {
            this.trust = this.add.image(
                640,
                400, 
                'trust',
            )
            .setInteractive()
            .on('pointerdown', () => {
                this.trust.setTint(0x2bff64); 
                this.music.play();
                this.time.delayedCall(2000, () => {
                this.gotoScene('Room9');
                });
        
            })
            this.trust.alpha = 0;
            this.tweens.add({
                        targets: this.trust,
                        alpha: 1,
                        duration: 1000,
                        ease: 'Linear'
                      });
        });

        this.time.delayedCall(500, () => {
            this.threat = this.add.image(
                240,
                400, 
                'threat',
            )
            .setInteractive()
            .on('pointerdown', () => {
                this.threat.setTint(0xff0000); 
                this.music.play();
                this.time.delayedCall(2000, () => {
                this.gotoScene('Room9');
                });
        
            })
            this.threat.alpha = 0;
            this.tweens.add({
                        targets: this.threat,
                        alpha: 1,
                        duration: 1000,
                        ease: 'Linear'
                      });
        });
        ////////////////////////////////////picture
        this.time.delayedCall(500, () => {
            this.r2 = this.add.image(
                440,
                170, 
                'r2',
            )
            this.r2.setScale(.25)
            this.r2.alpha = 0;
            this.tweens.add({
                        targets: this.r2,
                        alpha: 1,
                        duration: 1000,
                        ease: 'Linear'
                      });
        });
        
    }


    
}

class Room9 extends AdventureScene {
    constructor() {
        super("Room9", "Room 9");
    }

    preload(){
        this.load.path = "./assets/";
        this.load.image('r5', 'r5.png');
        this.load.image('trust', 'trust.png');
        this.load.image('threat', 'threat.png');
        this.load.audio('click','click.mp3');

    }
    create() {
        
        this.music = this.sound.add('click');
        this.music.setLoop(false);

        this.time.delayedCall(500, () => {
            this.trust = this.add.image(
                640,
                400, 
                'trust',
            )
            .setInteractive()
            .on('pointerdown', () => {
                this.trust.setTint(0xff0000); 
                this.music.play();
                this.time.delayedCall(2000, () => {
                this.gotoScene('Room10');
                });
        
            })
            this.trust.alpha = 0;
            this.tweens.add({
                        targets: this.trust,
                        alpha: 1,
                        duration: 1000,
                        ease: 'Linear'
                      });
        });

        this.time.delayedCall(500, () => {
            this.threat = this.add.image(
                240,
                400, 
                'threat',
            )
            .setInteractive()
            .on('pointerdown', () => {
                this.threat.setTint(0x2bff64); 
                this.music.play();
                this.time.delayedCall(2000, () => {
                this.gotoScene('Room10');
                });
        
            })
            this.threat.alpha = 0;
            this.tweens.add({
                        targets: this.threat,
                        alpha: 1,
                        duration: 1000,
                        ease: 'Linear'
                      });
        });
        ////////////////////////////////////picture
        this.time.delayedCall(500, () => {
            this.r5 = this.add.image(
                440,
                170, 
                'r5',
            )
            this.r5.setScale(.25)
            this.r5.alpha = 0;
            this.tweens.add({
                        targets: this.r5,
                        alpha: 1,
                        duration: 1000,
                        ease: 'Linear'
                      });
        });
        
    }


    
}

class Room10 extends AdventureScene {
    constructor() {
        super("Room10", "Room 10");
    }

    preload(){
        this.load.path = "./assets/";
        this.load.image('r4', 'r4.png');
        this.load.image('trust', 'trust.png');
        this.load.image('threat', 'threat.png');
        this.load.audio('click','click.mp3');

    }
    create() {
        
        this.music = this.sound.add('click');
        this.music.setLoop(false);

        this.time.delayedCall(500, () => {
            this.trust = this.add.image(
                640,
                400, 
                'trust',
            )
            .setInteractive()
            .on('pointerdown', () => {
                this.trust.setTint(0x2bff64); 
                this.music.play();
                this.time.delayedCall(2000, () => {
                this.gotoScene('Room11');
                });
        
            })
            this.trust.alpha = 0;
            this.tweens.add({
                        targets: this.trust,
                        alpha: 1,
                        duration: 1000,
                        ease: 'Linear'
                      });
        });

        this.time.delayedCall(500, () => {
            this.threat = this.add.image(
                240,
                400, 
                'threat',
            )
            .setInteractive()
            .on('pointerdown', () => {
                this.threat.setTint(0xff0000); 
                this.music.play();
                this.time.delayedCall(2000, () => {
                this.gotoScene('Room11');
                });
        
            })
            this.threat.alpha = 0;
            this.tweens.add({
                        targets: this.threat,
                        alpha: 1,
                        duration: 1000,
                        ease: 'Linear'
                      });
        });
        
        this.time.delayedCall(500, () => {
            this.r4 = this.add.image(
                440,
                170, 
                'r4',
            )
            this.r4.setScale(.25)
            this.r4.alpha = 0;
            this.tweens.add({
                        targets: this.r4,
                        alpha: 1,
                        duration: 1000,
                        ease: 'Linear'
                      });
        });
        
    }


    
}

class Room11 extends AdventureScene {
    constructor() {
        super("Room11", "Room 11");
    }

    preload(){
        this.load.path = "./assets/";
        this.load.image('r6', 'r6.png');
        this.load.image('rr6', 'rr6.png');
        this.load.image('trust', 'trust.png');
        this.load.image('threat', 'threat.png');
        this.load.audio('click','click.mp3');

    }
    create() {
        
        this.music = this.sound.add('click');
        this.music.setLoop(false);

        this.time.delayedCall(500, () => {
            this.trust = this.add.image(
                640,
                400, 
                'trust',
            )
            .setInteractive()
            .on('pointerdown', () => {
                
                this.trust.setTint(0xff0000); 
                
                this.time.delayedCall(500, () => {
                    this.rr6 = this.add.image(
                        440,
                        170, 
                        'rr6',
                    )
                    this.rr6.setScale(.25)
                });

                this.music.play();
                this.time.delayedCall(5000, () => {
                this.gotoScene('Room12');
                });
        
            })
            this.trust.alpha = 0;
            this.tweens.add({
                        targets: this.trust,
                        alpha: 1,
                        duration: 1000,
                        ease: 'Linear'
                      });
        });

        this.time.delayedCall(500, () => {
            this.threat = this.add.image(
                240,
                400, 
                'threat',
            )
            .setInteractive()
            .on('pointerdown', () => {
                this.threat.setTint(0x2bff64); 
                this.time.delayedCall(500, () => {
                    this.rr6 = this.add.image(
                        440,
                        170, 
                        'rr6',
                    )
                    this.rr6.setScale(.25)
                });

                this.music.play();
                this.time.delayedCall(5000, () => {
                this.gotoScene('Room12');
                });
        
            })
            this.threat.alpha = 0;
            this.tweens.add({
                        targets: this.threat,
                        alpha: 1,
                        duration: 1000,
                        ease: 'Linear'
                      });
        });
        
        this.time.delayedCall(500, () => {
            this.r6 = this.add.image(
                440,
                170, 
                'r6',
            )
            this.r6.setScale(.25)
            this.r6.alpha = 0;
            this.tweens.add({
                        targets: this.r6,
                        alpha: 1,
                        duration: 1000,
                        ease: 'Linear'
                      });
        });
        
    }


    
}


class Room12 extends AdventureScene {
    constructor() {
        super("Room12", "Room 12");
    }

    preload(){
        this.load.path = "./assets/";
        this.load.image('per3', 'rrr.png');
        this.load.image('per2', 'rrrr.png');
        this.load.image('per1', 'rrrrr.png');
        this.load.image('trust', 'trust.png');
        this.load.image('threat', 'threat.png');
        this.load.audio('click','click.mp3');
        this.load.audio('no','noo.mp3');

    }
    create() {
        
        this.music = this.sound.add('click');
        this.music.setLoop(false);

        this.music1 = this.sound.add('no');


        this.time.delayedCall(500, () => {
            this.trust = this.add.image(
                640,
                400, 
                'trust',
            )
            .setInteractive()
            .on('pointerdown', () => {
                this.time.delayedCall(2000, () => {
                    this.per2 = this.add.image(
                        440,
                        170, 
                        'per2',
                    )
                    this.per2.setScale(.25);
                });

                this.time.delayedCall(4800, () => {
                    this.per2 = this.add.image(
                        500,
                        170, 
                        'per2',
                    )
                    this.per2.setScale(.27);
                });

                this.time.delayedCall(4840, () => {
                    this.per2 = this.add.image(
                        530,
                        70, 
                        'per2',
                    )
                    this.per2.setScale(.28);
                });

                this.time.delayedCall(4950, () => {
                    this.per2 = this.add.image(
                        330,
                        120, 
                        'per2',
                    )
                    this.per2.setScale(.21);
                });

                this.time.delayedCall(4850, () => {
                    this.per2 = this.add.image(
                        200,
                        170, 
                        'per2',
                    )
                    this.per2.setScale(.29);
                });

                this.time.delayedCall(4920, () => {
                    this.per2 = this.add.image(
                        500,
                        120, 
                        'per2',
                    )
                    this.per2.setScale(.31);
                });

                this.time.delayedCall(4900, () => {
                    this.per2 = this.add.image(
                        400,
                        200, 
                        'per2',
                    )
                    this.per2.setScale(.39);
                });

                this.time.delayedCall(4950, () => {
                    this.per2 = this.add.image(
                        410,
                        190, 
                        'per2',
                    )
                    this.per2.setScale(.40);
                });

                this.time.delayedCall(5000, () => {
                    this.per2 = this.add.image(
                        320,
                        150, 
                        'per2',
                    )
                    this.per2.setScale(.39);
                });

                this.time.delayedCall(5050, () => {
                    this.per2 = this.add.image(
                        320,
                        150, 
                        'per2',
                    )
                    this.per2.setScale(.47);
                });


                this.time.delayedCall(5100, () => {
                    this.per2 = this.add.image(
                        300,
                        120, 
                        'per2',
                    )
                    this.per2.setScale(.42);
                });

                this.time.delayedCall(5150, () => {
                    this.per2 = this.add.image(
                        500,
                        160, 
                        'per2',
                    )
                    this.per2.setScale(.44);
                });

                this.time.delayedCall(5350, () => {
                    this.per2 = this.add.image(
                        300,
                        170, 
                        'per2',
                    )
                    this.per2.setScale(.45);
                });

                this.time.delayedCall(5390, () => {
                    this.per2 = this.add.image(
                        800,
                        180, 
                        'per2',
                    )
                    this.per2.setScale(.45);
                });

                this.time.delayedCall(5400, () => {
                    this.per2 = this.add.image(
                        900,
                        120, 
                        'per2',
                    )
                    this.per2.setScale(.5);

                });

                this.time.delayedCall(5450, () => {
                    this.per3 = this.add.image(
                        440,
                        200, 
                        'per3',
                    )
                    this.per3.setScale(.7);
                });
                this.music.play();
                
                
                this.time.delayedCall(5500, () => {
                this.gotoScene('Room13');
                });
        
            })
            this.trust.alpha = 0;
            this.tweens.add({
                        targets: this.trust,
                        alpha: 1,
                        duration: 1000,
                        ease: 'Linear'
                      });
        });

        this.time.delayedCall(500, () => {
            this.threat = this.add.image(
                240,
                400, 
                'threat',
            )
            .setInteractive()
            .on('pointerdown', () => {
                this.time.delayedCall(2000, () => {
                    this.per2 = this.add.image(
                        440,
                        170, 
                        'per2',
                    )
                    this.per2.setScale(.25);
                });

                this.time.delayedCall(4800, () => {
                    this.per2 = this.add.image(
                        500,
                        170, 
                        'per2',
                    )
                    this.per2.setScale(.27);
                });

                this.time.delayedCall(4840, () => {
                    this.per2 = this.add.image(
                        530,
                        70, 
                        'per2',
                    )
                    this.per2.setScale(.28);
                });

                this.time.delayedCall(4950, () => {
                    this.per2 = this.add.image(
                        330,
                        120, 
                        'per2',
                    )
                    this.per2.setScale(.21);
                });

                this.time.delayedCall(4850, () => {
                    this.per2 = this.add.image(
                        200,
                        170, 
                        'per2',
                    )
                    this.per2.setScale(.29);
                });

                this.time.delayedCall(4920, () => {
                    this.per2 = this.add.image(
                        500,
                        120, 
                        'per2',
                    )
                    this.per2.setScale(.31);
                });

                this.time.delayedCall(4900, () => {
                    this.per2 = this.add.image(
                        400,
                        200, 
                        'per2',
                    )
                    this.per2.setScale(.39);
                });

                this.time.delayedCall(4950, () => {
                    this.per2 = this.add.image(
                        410,
                        190, 
                        'per2',
                    )
                    this.per2.setScale(.40);
                });

                this.time.delayedCall(5000, () => {
                    this.per2 = this.add.image(
                        320,
                        150, 
                        'per2',
                    )
                    this.per2.setScale(.39);
                });

                this.time.delayedCall(5050, () => {
                    this.per2 = this.add.image(
                        320,
                        150, 
                        'per2',
                    )
                    this.per2.setScale(.47);
                });


                this.time.delayedCall(5100, () => {
                    this.per2 = this.add.image(
                        300,
                        120, 
                        'per2',
                    )
                    this.per2.setScale(.42);
                });

                this.time.delayedCall(5150, () => {
                    this.per2 = this.add.image(
                        500,
                        160, 
                        'per2',
                    )
                    this.per2.setScale(.44);
                });

                this.time.delayedCall(5350, () => {
                    this.per2 = this.add.image(
                        300,
                        170, 
                        'per2',
                    )
                    this.per2.setScale(.45);
                });

                this.time.delayedCall(5390, () => {
                    this.per2 = this.add.image(
                        800,
                        180, 
                        'per2',
                    )
                    this.per2.setScale(.45);
                });

                this.time.delayedCall(5400, () => {
                    this.per2 = this.add.image(
                        900,
                        120, 
                        'per2',
                    )
                    this.per2.setScale(.5);

                });

                this.time.delayedCall(5450, () => {
                    this.per3 = this.add.image(
                        440,
                        200, 
                        'per3',
                    )
                    this.per3.setScale(.7);
                });
                this.music.play();
                
                
                this.time.delayedCall(5500, () => {
                this.gotoScene('Room13');
                });
        
            })
            this.threat.alpha = 0;
            this.tweens.add({
                        targets: this.threat,
                        alpha: 1,
                        duration: 1000,
                        ease: 'Linear'
                      });
        });
        
        this.time.delayedCall(500, () => {
            this.per1 = this.add.image(
                440,
                170, 
                'per1',
            )
            this.per1.setScale(.25);
            this.per1.alpha = 0;
            this.tweens.add({
                        targets: this.per1,
                        alpha: 1,
                        duration: 1000,
                        ease: 'Linear'
                      });
        });
        
    }


    
}

//AdventureScene
//Phaser.Scene
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

class Room13 extends AdventureScene {
    constructor() {
        super("Room13", "Room13");
    }

    preload(){
        this.load.path = "./assets/";
        this.load.video("intro", "intro.mp4");

    }

    create() {

        this.input.on('pointerdown', () => this.scene.start('Intro'));
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
            this.input.on('pointerdown', () => this.scene.start('Intro'));
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
    scene: [Intro, Room1, Room2, Room3, Room4, Room5, Room6,Room7,Room8,Room9, Room10, Room11,Room12, Room13],
    title: "Adventure Game",
});

