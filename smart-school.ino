#include "DHT.h"

#define BROCHE_DHT 15
#define TYPE_DHT DHT22

DHT capteur(BROCHE_DHT, TYPE_DHT);

const int verte = 18;
const int orange = 19;
const int rouge = 21;

void setup() {
    Serial.begin(115200);

    capteur.begin();

    pinMode(verte, OUTPUT);
    pinMode(orange, OUTPUT);
    pinMode(rouge, OUTPUT);

    Serial.println("Demarrage du systeme");
}

void loop() {
    float temp = capteur.readTemperature();

    if (isnan(temp)) {
        Serial.println("Capteur non detecte");

        digitalWrite(verte, LOW);
        digitalWrite(orange, LOW);
        digitalWrite(rouge, LOW);
    } else {
        Serial.print("Temperature mesuree : ");
        Serial.print(temp);
        Serial.println(" degres C");

        digitalWrite(verte, LOW);
        digitalWrite(orange, LOW);
        digitalWrite(rouge, LOW);

        if (temp < 25) {
            digitalWrite(verte, HIGH);
            Serial.println("Etat : NORMAL");
        } else if (temp < 30) {
            digitalWrite(orange, HIGH);
            Serial.println("Etat : ATTENTION");
        } else {
            digitalWrite(rouge, HIGH);
            Serial.println("Etat : ALERTE");
        }
    }

    Serial.println("-------------------");

    delay(2000);
}
