void setup()
{
  Serial.begin(9600);
  Serial1.begin(9600);
  Serial2.begin(9600);
}

void loop()
{
  if (Serial.available() > 0)
  {
    String input = Serial.readString();
    // mySerial.println(input);
  }
  if (Serial1.available() > 1)
  {
    String input_1 = Serial1.readString();
    Serial.println(input_1);
  }
  if (Serial2.available() > 1)
  {
    String input_2 = Serial2.readString();
    Serial.println(input_2);
  }
  delay(20);
}
