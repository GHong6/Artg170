let globalScore = 0;

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
        this.load.audio('hum','Hum2.mp3');
        this.load.audio('click','click.mp3');
        
    }

    create() {
        

        this.music1 = this.sound.add('hum');
        this.music = this.sound.add('click');
        this.music.setLoop(false);
        this.music1.setLoop(true);
        this.music1.play();

        this.time.delayedCall(500, () => {
            this.s1 = this.add.image(
                100,
                270,
                's1',
            )
            this.s1.setScale(.5)
            .setInteractive() 
            .on('pointerdown', () => {
                    this.s1.setTint(0x404040); // Red tint
                    this.music.play();
                    this.time.delayedCall(1000, () => {
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
                this.s2.setTint(0x404040); // Red tint
                this.music.play();
                this.time.delayedCall(1000, () => {
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
                this.s3.setTint(0x404040); // Red tint
                this.music.play();
                this.time.delayedCall(1000, () => {
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
                if (!this.buttonPressed) {
                globalScore += 1;

                this.buttonPressed = true;
                this.s4.setTint(0x404040); 
                this.music.play();
                this.time.delayedCall(1000, () => {
                this.gotoScene('Room2');
                });
            }
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
                this.s5.setTint(0x404040); 
                this.music.play();
                this.time.delayedCall(1000, () => {
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
                    this.q1.setTint(0x404040); // Red tint
                    this.music.play();
                    this.time.delayedCall(1000, () => {
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
                this.q2.setTint(0x404040); // Red tint
                this.music.play();
                this.time.delayedCall(1000, () => {
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
                if (!this.buttonPressed) {
                globalScore += 1;
                this.buttonPressed = true;
                this.q3.setTint(0x404040); // Red tint
                this.music.play();
                this.time.delayedCall(1000, () => {
                this.gotoScene('Room3');
                });
            }
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
                this.q4.setTint(0x404040); 
                this.music.play();
                this.time.delayedCall(1000, () => {
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
                this.q5.setTint(0x404040); 
                this.music.play();
                this.time.delayedCall(1000, () => {
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
                    this.w1.setTint(0x404040); // Red tint
                    this.music.play();
                    this.time.delayedCall(1000, () => {
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
                if (!this.buttonPressed) {
                globalScore += 1;
                this.buttonPressed = true;
                this.w2.setTint(0x404040); // Red tint
                this.music.play();
                this.time.delayedCall(1000, () => {
                this.gotoScene('Room4');
                });
            }
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
                this.w3.setTint(0x404040); // Red tint
                this.music.play();
                this.time.delayedCall(1000, () => {
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
                this.w4.setTint(0x404040); 
                this.music.play();
                this.time.delayedCall(1000, () => {
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
                this.w5.setTint(0x404040); 
                this.music.play();
                this.time.delayedCall(1000, () => {
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
                    this.e1.setTint(0x404040); // Red tint
                    this.music.play();
                    this.time.delayedCall(1000, () => {
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
                this.e2.setTint(0x404040); // Red tint
                this.music.play();
                this.time.delayedCall(1000, () => {
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
                this.e3.setTint(0x404040); // Red tint
                this.music.play();
                this.time.delayedCall(1000, () => {
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
                this.e4.setTint(0x404040); 
                this.music.play();
                this.time.delayedCall(1000, () => {
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
                if (!this.buttonPressed) {
                globalScore += 1;
                this.buttonPressed = true;
                this.e5.setTint(0x404040); 
                this.music.play();
                this.time.delayedCall(1000, () => {
                this.gotoScene('Room5');
                });
            }
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
                if (!this.buttonPressed) {
                    globalScore += 1;
                    this.buttonPressed = true;
                    this.a1.setTint(0x404040); // Red tint
                    this.music.play();
                    this.time.delayedCall(1000, () => {
                    this.gotoScene('Test1');
                    });
                }
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
                this.a2.setTint(0x404040); // Red tint
                this.music.play();
                this.time.delayedCall(1000, () => {
                this.gotoScene('Test1');
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
                this.a3.setTint(0x404040); // Red tint
                this.music.play();
                this.time.delayedCall(1000, () => {
                this.gotoScene('Test1');
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
                this.a4.setTint(0x404040); 
                this.music.play();
                this.time.delayedCall(1000, () => {
                this.gotoScene('Test1');
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
                this.a5.setTint(0x404040); 
                this.music.play();
                this.time.delayedCall(1000, () => {
                this.gotoScene('Test1');
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

class Test1 extends AdventureScene {
    constructor() {
        super("Test1", "Test1");
    }

    preload(){
        this.load.path = "./assets/";
        this.load.image('qq1', 'qq1.png');
        this.load.image('qq2', 'qq2.png');
        this.load.image('qq3', 'qq3.png');
        this.load.image('qq4', 'qq4.png');
        this.load.image('qq5', 'qq5.png');
        this.load.audio('hum','Hum2.mp3');
        this.load.audio('click','click.mp3');
        
    }

    create() {
        

        this.music1 = this.sound.add('hum');
        this.music = this.sound.add('click');
        this.music.setLoop(false);
        this.music1.setLoop(true);
        this.music1.play();

        this.time.delayedCall(500, () => {
            this.qq1 = this.add.image(
                100,
                270,
                'qq1',
            )
            this.qq1.setScale(.5)
            .setInteractive() 
            .on('pointerdown', () => {
                    globalScore += 1;
                    this.qq1.setTint(0x404040); // Red tint
                    this.music.play();
                    this.time.delayedCall(1000, () => {
                    this.gotoScene('Test2');
                    });
        
            })
            this.qq1.alpha = 0;
            this.tweens.add({
                        targets: this.qq1,
                        alpha: 1,
                        duration: 1000,
                        ease: 'Linear'
                      });
        });

        
        this.time.delayedCall(600, () => {
            this.qq2 = this.add.image(
                270,
                270,
                'qq2',
            )
            this.qq2.setScale(.5)
            .setInteractive()
            .on('pointerdown', () => {
                this.qq2.setTint(0x404040); // Red tint
                this.music.play();
                this.time.delayedCall(1000, () => {
                this.gotoScene('Test2');
                });
        
            })
            this.qq2.alpha = 0;
            this.tweens.add({
                        targets: this.qq2,
                        alpha: 1,
                        duration: 1000,
                        ease: 'Linear'
                      });
        });

        this.time.delayedCall(700, () => {
            this.qq3 = this.add.image(
                440,
                270,
                'qq3',
            )
            this.qq3.setScale(.5)
            .setInteractive()
            .on('pointerdown', () => {
                this.qq3.setTint(0x404040); // Red tint
                this.music.play();
                this.time.delayedCall(1000, () => {
                this.gotoScene('Test2');
                });
        
            })
            this.qq3.alpha = 0;
            this.tweens.add({
                        targets: this.qq3,
                        alpha: 1,
                        duration: 1000,
                        ease: 'Linear'
                      });
        });

        this.time.delayedCall(800, () => {
            this.qq4 = this.add.image(
                610,
                270, 
                'qq4',
            )
            this.qq4.setScale(.5)
            .setInteractive()
            .on('pointerdown', () => {
                if (!this.buttonPressed) {
        

                this.buttonPressed = true;
                this.qq4.setTint(0x404040); 
                this.music.play();
                this.time.delayedCall(1000, () => {
                this.gotoScene('Test2');
                });
            }
            })
            this.qq4.alpha = 0;
            this.tweens.add({
                        targets: this.qq4,
                        alpha: 1,
                        duration: 1000,
                        ease: 'Linear'
                      });
        });

        this.time.delayedCall(900, () => {
            this.qq5 = this.add.image(
                780,
                270, 
                'qq5',
            )
            this.qq5.setScale(.5)
            .setInteractive()
            .on('pointerdown', () => {
                this.qq5.setTint(0x404040); 
                this.music.play();
                this.time.delayedCall(1000, () => {
                this.gotoScene('Test2');
                });
        
            })
            this.qq5.alpha = 0;
            this.tweens.add({
                        targets: this.qq5,
                        alpha: 1,
                        duration: 1000,
                        ease: 'Linear'
                      });
        });



        this.time.delayedCall(200, () => {
            let textObject = this.add.text(440,100, "Question 6").setFontSize(50);
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

class Test2 extends AdventureScene {
    constructor() {
        super("Test2", "Test2");
    }

    preload(){
        this.load.path = "./assets/";
        this.load.image('qqq1', 'qqq1.png');
        this.load.image('qqq2', 'qqq2.png');
        this.load.image('qqq3', 'qqq3.png');
        this.load.image('qqq4', 'qqq4.png');
        this.load.image('qqq5', 'qqq5.png');
        this.load.audio('hum','Hum2.mp3');
        this.load.audio('click','click.mp3');
        
    }

    create() {
        

        this.music1 = this.sound.add('hum');
        this.music = this.sound.add('click');
        this.music.setLoop(false);
        this.music1.setLoop(true);
        this.music1.play();

        this.time.delayedCall(500, () => {
            this.qqq4 = this.add.image(
                100,
                270,
                'qqq4',
            )
            this.qqq4.setScale(.5)
            .setInteractive() 
            .on('pointerdown', () => {
                    globalScore += 1;
                    this.qqq4.setTint(0x404040); // Red tint
                    this.music.play();
                    this.time.delayedCall(1000, () => {
                    this.gotoScene('Test3');
                    });
        
            })
            this.qqq4.alpha = 0;
            this.tweens.add({
                        targets: this.qqq4,
                        alpha: 1,
                        duration: 1000,
                        ease: 'Linear'
                      });
        });

        
        this.time.delayedCall(600, () => {
            this.qqq2 = this.add.image(
                270,
                270,
                'qqq2',
            )
            this.qqq2.setScale(.5)
            .setInteractive()
            .on('pointerdown', () => {
                this.qqq2.setTint(0x404040); // Red tint
                this.music.play();
                this.time.delayedCall(1000, () => {
                this.gotoScene('Test3');
                });
        
            })
            this.qqq2.alpha = 0;
            this.tweens.add({
                        targets: this.qqq2,
                        alpha: 1,
                        duration: 1000,
                        ease: 'Linear'
                      });
        });

        this.time.delayedCall(700, () => {
            this.qqq3 = this.add.image(
                440,
                270,
                'qqq3',
            )
            this.qqq3.setScale(.5)
            .setInteractive()
            .on('pointerdown', () => {
                this.qqq3.setTint(0x404040); // Red tint
                this.music.play();
                this.time.delayedCall(1000, () => {
                this.gotoScene('Test3');
                });
        
            })
            this.qqq3.alpha = 0;
            this.tweens.add({
                        targets: this.qqq3,
                        alpha: 1,
                        duration: 1000,
                        ease: 'Linear'
                      });
        });

        this.time.delayedCall(800, () => {
            this.qqq1 = this.add.image(
                610,
                270, 
                'qqq1',
            )
            this.qqq1.setScale(.5)
            .setInteractive()
            .on('pointerdown', () => {
                if (!this.buttonPressed) {
                globalScore += 1;

                this.buttonPressed = true;
                this.qqq1.setTint(0x404040); 
                this.music.play();
                this.time.delayedCall(1000, () => {
                this.gotoScene('Test3');
                });
            }
            })
            this.qqq1.alpha = 0;
            this.tweens.add({
                        targets: this.qqq1,
                        alpha: 1,
                        duration: 1000,
                        ease: 'Linear'
                      });
        });

        this.time.delayedCall(900, () => {
            this.qqq5 = this.add.image(
                780,
                270, 
                'qqq5',
            )
            this.qqq5.setScale(.5)
            .setInteractive()
            .on('pointerdown', () => {
                this.qqq5.setTint(0x404040); 
                this.music.play();
                this.time.delayedCall(1000, () => {
                this.gotoScene('Test3');
                });
        
            })
            this.qqq5.alpha = 0;
            this.tweens.add({
                        targets: this.qqq5,
                        alpha: 1,
                        duration: 1000,
                        ease: 'Linear'
                      });
        });



        this.time.delayedCall(200, () => {
            let textObject = this.add.text(440,100, "Question 7").setFontSize(50);
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




class Test3 extends AdventureScene {
    constructor() {
        super("Test3", "Test3");
    }

    preload(){
        this.load.path = "./assets/";
        this.load.image('qqqq1', 'qqqq1.png');
        this.load.image('qqqq2', 'qqqq2.png');
        this.load.image('qqqq3', 'qqqq3.png');
        this.load.image('qqqq4', 'qqqq4.png');
        this.load.image('qqqq5', 'qqqq5.png');
        this.load.image('qqqq6', 'qqqq6.png');
        this.load.image('qqqq7', 'qqqq7.png');
        this.load.image('qqqq8', 'qqqq8.png');
        this.load.image('qqqq9', 'qqqq9.png');
        this.load.image('qqqq10', 'qqqq10.png');
        this.load.audio('hum','Hum2.mp3');
        this.load.audio('click','click.mp3');
        
    }

    create() {
        

        this.music1 = this.sound.add('hum');
        this.music = this.sound.add('click');
        this.music.setLoop(false);
        this.music1.setLoop(true);
        this.music1.play();

        this.time.delayedCall(500, () => {
            this.qqqq1 = this.add.image(
                100,
                270,
                'qqqq1',
            )
            this.qqqq1.setScale(.5)
            .setInteractive() 
            .on('pointerdown', () => {
                    
                    this.qqqq1.setTint(0x404040); // Red tint
                    this.music.play();
                    this.time.delayedCall(1000, () => {
                    this.gotoScene('Room6');
                    });
        
            })
            this.qqqq1.alpha = 0;
            this.tweens.add({
                        targets: this.qqqq1,
                        alpha: 1,
                        duration: 1000,
                        ease: 'Linear'
                      });
        });

        
        this.time.delayedCall(600, () => {
            this.qqqq2 = this.add.image(
                270,
                270,
                'qqqq2',
            )
            this.qqqq2.setScale(.5)
            .setInteractive()
            .on('pointerdown', () => {
                this.qqqq2.setTint(0x404040); // Red tint
                this.music.play();
                this.time.delayedCall(1000, () => {
                this.gotoScene('Room6');
                });
        
            })
            this.qqqq2.alpha = 0;
            this.tweens.add({
                        targets: this.qqqq2,
                        alpha: 1,
                        duration: 1000,
                        ease: 'Linear'
                      });
        });

        this.time.delayedCall(700, () => {
            this.qqqq3 = this.add.image(
                440,
                270,
                'qqqq3',
            )
            this.qqqq3.setScale(.5)
            .setInteractive()
            .on('pointerdown', () => {
                globalScore += 1;
                this.qqqq3.setTint(0x404040); // Red tint
                this.music.play();
                this.time.delayedCall(1000, () => {
                this.gotoScene('Room6');
                });
        
            })
            this.qqqq3.alpha = 0;
            this.tweens.add({
                        targets: this.qqqq3,
                        alpha: 1,
                        duration: 1000,
                        ease: 'Linear'
                      });
        });

        this.time.delayedCall(800, () => {
            this.qqqq4 = this.add.image(
                610,
                270, 
                'qqqq4',
            )
            this.qqqq4.setScale(.5)
            .setInteractive()
            .on('pointerdown', () => {
                if (!this.buttonPressed) {
        

                this.buttonPressed = true;
                this.qqqq4.setTint(0x404040); 
                this.music.play();
                this.time.delayedCall(1000, () => {
                this.gotoScene('Room6');
                });
            }
            })
            this.qqqq4.alpha = 0;
            this.tweens.add({
                        targets: this.qqqq4,
                        alpha: 1,
                        duration: 1000,
                        ease: 'Linear'
                      });
        });

        this.time.delayedCall(900, () => {
            this.qqqq5 = this.add.image(
                780,
                270, 
                'qqqq5',
            )
            this.qqqq5.setScale(.5)
            .setInteractive()
            .on('pointerdown', () => {
                this.qqqq5.setTint(0x404040); 
                this.music.play();
                this.time.delayedCall(1000, () => {
                this.gotoScene('Room6');
                });
        
            })
            this.qqqq5.alpha = 0;
            this.tweens.add({
                        targets: this.qqqq5,
                        alpha: 1,
                        duration: 1000,
                        ease: 'Linear'
                      });
        });


        ////////////////////
        this.time.delayedCall(500, () => {
            this.qqqq6 = this.add.image(
                100,
                450,
                'qqqq6',
            )
            this.qqqq6.setScale(.5)
            .setInteractive() 
            .on('pointerdown', () => {
                    
                    this.qqqq6.setTint(0x404040); // Red tint
                    this.music.play();
                    this.time.delayedCall(1000, () => {
                    this.gotoScene('Room6');
                    });
        
            })
            this.qqqq6.alpha = 0;
            this.tweens.add({
                        targets: this.qqqq6,
                        alpha: 1,
                        duration: 1000,
                        ease: 'Linear'
                      });
        });

        
        this.time.delayedCall(600, () => {
            this.qqqq7 = this.add.image(
                270,
                450,
                'qqqq7',
            )
            this.qqqq7.setScale(.5)
            .setInteractive()
            .on('pointerdown', () => {
                this.qqqq7.setTint(0x404040); // Red tint
                this.music.play();
                this.time.delayedCall(1000, () => {
                this.gotoScene('Room6');
                });
        
            })
            this.qqqq7.alpha = 0;
            this.tweens.add({
                        targets: this.qqqq7,
                        alpha: 1,
                        duration: 1000,
                        ease: 'Linear'
                      });
        });

        this.time.delayedCall(700, () => {
            this.qqqq8 = this.add.image(
                440,
                450,
                'qqqq8',
            )
            this.qqqq8.setScale(.5)
            .setInteractive()
            .on('pointerdown', () => {
                this.qqqq8.setTint(0x404040); // Red tint
                this.music.play();
                this.time.delayedCall(1000, () => {
                this.gotoScene('Room6');
                });
        
            })
            this.qqqq8.alpha = 0;
            this.tweens.add({
                        targets: this.qqqq8,
                        alpha: 1,
                        duration: 1000,
                        ease: 'Linear'
                      });
        });

        this.time.delayedCall(800, () => {
            this.qqqq9 = this.add.image(
                610,
                450, 
                'qqqq9',
            )
            this.qqqq9.setScale(.5)
            .setInteractive()
            .on('pointerdown', () => {
                if (!this.buttonPressed) {
        

                this.buttonPressed = true;
                this.qqqq9.setTint(0x404040); 
                this.music.play();
                this.time.delayedCall(1000, () => {
                this.gotoScene('Room6');
                });
            }
            })
            this.qqqq9.alpha = 0;
            this.tweens.add({
                        targets: this.qqqq9,
                        alpha: 1,
                        duration: 1000,
                        ease: 'Linear'
                      });
        });

        this.time.delayedCall(900, () => {
            this.qqqq10 = this.add.image(
                780,
                450, 
                'qqqq10',
            )
            this.qqqq10.setScale(.5)
            .setInteractive()
            .on('pointerdown', () => {
                this.qqqq10.setTint(0x404040); 
                this.music.play();
                this.time.delayedCall(1000, () => {
                this.gotoScene('Room6');
                });
        
            })
            this.qqqq10.alpha = 0;
            this.tweens.add({
                        targets: this.qqqq10,
                        alpha: 1,
                        duration: 1000,
                        ease: 'Linear'
                      });
        });


        this.time.delayedCall(200, () => {
            let textObject = this.add.text(440,100, "Question 8").setFontSize(50);
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
                if (!this.buttonPressed) {
                globalScore += 1;
                this.buttonPressed = true;
                this.trust.setTint(0x404040); 
                this.music.play();
                this.time.delayedCall(1000, () => {
                this.gotoScene('Room7');
                });
            }
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
                this.threat.setTint(0x404040); 
                this.music.play();
                this.time.delayedCall(1000, () => {
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
                this.trust.setTint(0x404040); 
                this.music.play();
                this.time.delayedCall(1000, () => {
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
                if (!this.buttonPressed) {
                globalScore += 1;
                this.buttonPressed = true;
                this.threat.setTint(0x404040); 
                this.music.play();
                this.time.delayedCall(1000, () => {
                this.gotoScene('Room8');
                });
            }
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
                if (!this.buttonPressed) {
                globalScore += 1;
                this.buttonPressed = true;
                this.trust.setTint(0x404040); 
                this.music.play();
                this.time.delayedCall(1000, () => {
                this.gotoScene('Room9');
                });
            }
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
                this.threat.setTint(0x404040); 
                this.music.play();
                this.time.delayedCall(1000, () => {
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
                this.trust.setTint(0x404040); 
                this.music.play();
                this.time.delayedCall(1000, () => {
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
                if (!this.buttonPressed) {
                globalScore += 1;
                this.buttonPressed = true;
                this.threat.setTint(0x404040); 
                this.music.play();
                this.time.delayedCall(1000, () => {
                this.gotoScene('Room10');
                });
            }
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
                if (!this.buttonPressed) {
                globalScore += 1;
                this.buttonPressed = true;
                this.trust.setTint(0x404040); 
                this.music.play();
                this.time.delayedCall(1000, () => {
                this.gotoScene('Room11');
                });
            }
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
                this.threat.setTint(0x404040); 
                this.music.play();
                this.time.delayedCall(1000, () => {
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
                
                this.trust.setTint(0x404040); 
                
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
                if (!this.buttonPressed) {
                globalScore += 1;
                this.buttonPressed = true;
                this.threat.setTint(0x404040); 
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
            }
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
                this.per2 = this.add.image(
                    440,
                    170, 
                    'per2',
                )
                this.per2.setScale(.25);
   

            this.time.delayedCall(1000, () => {
                for (let i = 0; i < 50; i++) {
                    const x = Phaser.Math.RND.integerInRange(200, 800); // Random X position between 200 and 800
                    const y = Phaser.Math.RND.integerInRange(70, 270);  // Random Y position between 70 and 270
                    const scale = Phaser.Math.RND.realInRange(0.25, 0.5); // Random scaling between 0.25 and 0.5
            
                    this.time.delayedCall((i * 20) + 2000, () => {
                        const per2 = this.add.image(x, y, 'per2');
                        per2.setScale(scale);
                    });
                }
            });

            this.time.delayedCall(4000, () => {
                this.per3 = this.add.image(
                    440,
                    200, 
                    'per3',
                )
                this.per3.setScale(.7);
            });
            this.music.play();

                this.time.delayedCall(4050, () => {
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
                this.per2 = this.add.image(
                    440,
                    170, 
                    'per2',
                )
                this.per2.setScale(.25);
   

            this.time.delayedCall(1000, () => {
                for (let i = 0; i < 50; i++) {
                    const x = Phaser.Math.RND.integerInRange(200, 800); // Random X position between 200 and 800
                    const y = Phaser.Math.RND.integerInRange(70, 270);  // Random Y position between 70 and 270
                    const scale = Phaser.Math.RND.realInRange(0.25, 0.5); // Random scaling between 0.25 and 0.5
            
                    this.time.delayedCall((i * 20) + 2000, () => {
                        const per2 = this.add.image(x, y, 'per2');
                        per2.setScale(scale);
                    });
                }
            });

            this.time.delayedCall(4000, () => {
                this.per3 = this.add.image(
                    440,
                    200, 
                    'per3',
                )
                this.per3.setScale(.7);
            });
            this.music.play();

                this.time.delayedCall(4050, () => {
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

        //this.input.on('pointerdown', () => this.scene.start('Room1'));
        const video = this.add.video(400, 300, "intro");
        video.play();

        video.on('complete', () => {
            this.scene.start('Room1')
        });
    }
}

class Room13 extends AdventureScene {
    constructor() {
        super("Room13", "Room13");
    }

    preload(){
        this.load.path = "./assets/";
        this.load.video("end", "Ending.mp4");
        this.load.image('a5', 'a5.png');
        this.load.image('tape', 'Tape.png');
    }

    updateScoreText() {
        if (this.scoreText) {
            this.scoreText.destroy(); // Remove the old score text
        }
        
    }

    create() {


        let result = globalScore / 15;
        let roundedResult = result.toFixed(2);

        let lastScore = roundedResult * 100;
        let lastScore1 = (roundedResult * 100).toFixed(0);

        // const video = this.add.video(400, 300, "end");
        // video.play();

   
        
        // video.on('complete', () => {

            

            this.scoreText = this.add.text(300, 170, 'Score: ' + lastScore1 + "%", {
                fontSize: '50px',
                fill: '#fff'
            });

        

            if(lastScore >89){
                this.scoreText = this.add.text(300, 270, "You're prepared", {
                    fontSize: '24px',
                    fill: '#fff'
                });


                
            }else{
                this.scoreText = this.add.text(300, 270, "Remember to lock your door", {
                    fontSize: '24px',
                    fill: '#fff'
                });
            }

            this.tape = this.add.image(
                440,
                300, 
                'tape',
            )
            this.tape.setInteractive();

            this.tape2 = this.add.text(350, 480, "Tape 2: Audio Test", {
                fontSize: '15px',
                fill: '#fff'
            });

            this.tweens.add({
                targets: [this.tape, this.tape2],

                duration: 1000,
                ease: 'Sine.InOut',
                y: '+=20', // Move the elements up by 10 pixels
                yoyo: true, // This makes it go up and then back down
                repeat: -1, // Repeat indefinitely
            });

            this.tape.on('pointerdown', () => {
                        window.open('https://cigreen.github.io/Tape-2-ARTG-170/', '_blank');

            });

        // });
    }
}




const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 880,
        height: 540
    },
    scene: [Intro, Room1, Room2, Room3, Room4, Room5, Test1, Test2,Test3, Room6, Room7,Room8,Room9, Room10, Room11,Room12,Room13],
    title: "Adventure Game",
});

