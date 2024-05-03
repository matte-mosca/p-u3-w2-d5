import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const MyMain = ({ city, countryCode }) => {
  const [weather, setWeather] = useState(null);
  const navigate = useNavigate();
  const fetchWeather = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&APPID=82521aef7dffc3bb2c0c61957aee5936`
      );
      if (response.ok) {
        const data = await response.json();
        setWeather(data);
      } else {
        throw new Error("Errore nella chiamata");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchWeather();

  }, [city, countryCode]);

  return (
    weather && (
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={6}>
            <Card className="card-bg">
              <Card.Body>
                <Card.Title className="card-body">
                  <p>
                    {weather.name} - {weather.sys.country}
                  </p>
                </Card.Title>

                {weather.weather.map((e) => {
                  return <Card.Text key={e.id}>{e.main}</Card.Text>;
                })}
                <Button variant="light" onClick={() => navigate("/detail")}>
                  More infos
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  );
};

export default MyMain;

