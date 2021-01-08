import React from "react";
import TitleAndDescription from "../components/TitleAndDescription";
import Layout from "../components/Layout";
import Container from "react-bootstrap/Container";
import Contact from "../components/Contact";
import Row from "react-bootstrap/Row";
import ChartImageContainer from "../components/ChartImageContainer";
import ChartFamilySection from "../components/ChartFamilySection";
import { Link } from "gatsby";
import { Matplotlib, Plotly } from "../components/MiscellaneousLogos"
import ChartImage from "../components/ChartImage";
import Spacing from "../components/Spacing";
import { Button } from "react-bootstrap";

const chartDescription =
  "<p>A <a href='https://www.data-to-viz.com/graph/sankey.html'>Sankey Diagram</a> is a visualisation technique that allows to display flows. Several entities (nodes) are represented by rectangles or text. Their links are represented with arrows or arcs that have a width proportional to the importance of the flow.";


export default function Chord() {

  return (

    <Layout title="Sankey diagram" isTocEnabled>
      <TitleAndDescription
        title="Sankey diagram"
        description={chartDescription}
      />

      <Container>
        <h2 id="Chord library"><Plotly />Sankey with the <code>Chord</code> library</h2>
        <p>
          Chord diagram is not a very usual type of chart. The most common library like <code>Matplotlib</code> and
          <code>Seaborn</code> will not be of any help to build one. Fortunately, the <code>chord</code> library wraps some functions
          coming from javascript and the <a href='https://www.d3-graph-gallery.com'>d3.js library</a>.
        </p>
        <p>
          The examples below will guide you through a migration dataset already discussed in <a href='https://www.data-to-viz.com/graph/chord.html'>data-to-viz.com</a>. It starts
          by describing the input dataset and the basic usage of the <code>Chord()</code> function.
        </p>
        <Link to='/chord-diagram-python-chord'>
          <Button size="sm">
            Show me the code
          </Button>
        </Link>
        <Row>
          <ChartImageContainer
            imgName="chord-diagram-chord-library"
            caption="Most basic chord diagram example from a random matrix."
            linkTo="/chord-diagram-python-chord"
          />
        </Row>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Bokeh">Chord diagram with <code>Bokeh</code></h2>
        <p>
          <a href='https://bokeh.org'>Bokeh</a> is a pretty neat python library for data visualization. It provides a <code>chord_from_df()</code> function
          dedicated to chord diagram.
        </p>
        <p>
          The example below comes straight from their <a href='https://docs.bokeh.org/en/0.12.5/docs/gallery/chord_chart.html'>documentation</a>.
          It represents the relationship between each character of the book <i>Les misérables</i>.
        </p>
        <div style={{ maxWidth: "600px", margin: "0 auto", padding: 30 }}>
          <Link to='/231-chord-diagram-with-bokeh'>
            <ChartImage imgName={'231_Chord_Bokeh'} caption={'Simple chord diagram with the Bokeh python library'} />
          </Link>
        </div>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Plotly">Chord diagram with <code>Plotly</code></h2>
        <p>
          <code>plotly</code> is a powerful python library for data visualization and also allows
          to build chord diagrams. The good part is that it builds interactive charts. However
          if comes with a lot of code complexity so be ready to spend several hours before getting
          your first figure. &#128542;
        </p>
        <p>The example below shows the relationship between several people on facebook. Have a look
        to the <a href='https://plotly.com/python/v3/filled-chord-diagram/'>plotly doc</a> for explanation and
        code. Hover over a connection to get names and flow value.
        </p>
        <div className="mx-auto">
          <iframe src="/interactiveCharts/plotly_chord_diagram.html" title="chord diagram with plotly" style={{ border: "none", width: '800px', height: '500px' }}></iframe>
        </div>
        <a href='https://plotly.com/python/v3/filled-chord-diagram/'>
          <Button size="sm">
            See code
          </Button>
        </a>
      </Container>

      <Spacing />

      <div className="greySection" id="related">
        <Container>
          <ChartFamilySection chartFamily="flow" />
        </Container>
      </div>

      <Spacing />

      <Container>
        <Contact />
      </Container>

      <Spacing />

    </Layout >
  );
}
