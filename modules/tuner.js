import Recording from 'react-native-recording';
import PitchFinder from "pitchfinder";
import EventEmitter from "react-native-eventemitter";

export default class Tuner {

    noteStrings = [
        "C",
        "C♯",
        "D",
        "D♯",
        "E",
        "F",
        "F♯",
        "G",
        "G♯",
        "A",
        "A♯",
        "B"
    ];

    constructor (bufferSize = 4096, sampleRate = 44100) {
        this.noteA = 440;
        this.sampleRate = sampleRate;
        this.bufferSize = bufferSize;
        this.pitchFinder = new PitchFinder.YIN({ sampleRate: this.sampleRate });
    }

    _getFrequency (signal) {
        return this.pitchFinder(signal)
    }

    // https://www.translatorscafe.com/unit-converter/ru/calculator/note-frequency/?note=a-sharp&octave=4
    _getMIDI (f) {
        const n = 12 * (Math.log(f / this.noteA) / Math.log(2));
        return Math.round(n) + 69;
    }

    _getNote (midiNumber) {
        return this.noteStrings[midiNumber % 12];
    }

    _getOctave () {

    }

    _getCents (f, note) {
        const getStandardFrequency = note => {
            return 440 * Math.pow(2, (note - 69) / 12);
        };

        return Math.floor(
            (1200 * Math.log(f / getStandardFrequency(note))) /
            Math.log(2)
        );
    }

    init () {
        console.log('recording: ', Recording);
        Recording.init({
            bufferSize: this.bufferSize,
            sampleRate: this.sampleRate,
            bitsPerChannel: 16,
            channelsPerFrame: 1,
        });

        Recording.addRecordingEventListener(data => {
            const f = this._getFrequency(data);
            const MIDI = this._getMIDI(f);
            console.log('MIDI: ', this._getMIDI(f), 'Note_: ', this._getNote(MIDI), 'Cents_: ', this._getCents(f, MIDI));
            //EventEmitter.emit("foo", data);
            //this.dispatchEvent('sss__')
            // console.log('PF: ', this._getFrequency(data));
            // console.log('F: ');
        });

        return Recording;
    }

    static start () {
        return Recording.start();
    }

    static stop () {
        return Recording.stop();
    }

}



