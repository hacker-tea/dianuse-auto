basic.forever(function () {
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 19)
    basic.pause(500)
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
    maqueen.motorStop(maqueen.Motors.M1)
    basic.pause(500)
})
