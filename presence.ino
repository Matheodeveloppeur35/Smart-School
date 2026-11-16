Code du capteur de présence:


const int capteur = 14;
const int led = 2;

int anciennePresence = LOW;

void setup() {

  Serial.begin(115200);

  pinMode(capteur, INPUT);
  pinMode(led, OUTPUT);

  digitalWrite(led, LOW);

  Serial.println("Initialisation du systeme...");
}

void loop() {

  int presence = digitalRead(capteur);

  if (presence != anciennePresence) {

    if (presence == HIGH) {

      Serial.println("Mouvement detecte !");
      digitalWrite(led, HIGH);

    } else {

      Serial.println("Zone sans mouvement");
      digitalWrite(led, LOW);

    }

    anciennePresence = presence;
  }

  delay(100);
}
