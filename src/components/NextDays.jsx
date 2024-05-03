import { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const ComponentNextDays = (props) => {
  const [detailNextDays, setDetailNextDays] = useState(null);

  const fetchDetailNextDays = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${props.city},${props.countryCode}&appid=82521aef7dffc3bb2c0c61957aee5936`
      );
      if (response.ok) {
        const data = await response.json();
        setDetailNextDays(data);
      } else {
        throw new Error("Errore nella chiamata");
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchDetailNextDays();
  }, []);
  return (
    detailNextDays && (
      <Row className="g-3">
        {detailNextDays.list.map((e, index) => {
          return (
            <Col xs={12} md={4} lg={3} key={index} className="px-5">
              <Card>
                <Card.Header>{e.dt_txt}</Card.Header>

                <div>
                  <p>{e.main.temp}&deg;C </p>
                  <p>{e.weather[0].main}</p>
                </div>
              </Card>
            </Col>
          );
        })}
      </Row>
    )
  );
};
export default ComponentNextDays;

