import '../styles/ProductDetail.css';

const ScrollPanelSpecs = () => {
    return (
        <div className="specs">
            <h2>Engine</h2>
            <dl>
              <dt>Bore x Stroke</dt>
              <dd>58mm x 58.6mm</dd>
              <dt>Clutch</dt>
              <dd>Automatic centrifugal dry clutch</dd>
              <dt>Consumption</dt>
              <dd>36.8 Km/I (WMTC cycle)</dd>
              <dt>Cooling</dt>
              <dd>Air</dd>
              <dt>CO2 Emissions</dt>
              <dd>65 g/Km</dd>
              <dt>Distribution</dt>
              <dd>Single overhead camshaft, 3 valves (2 input, 1 output)</dd>
              <dt>Engine</dt>
              <dd>Single cylinder 4-stroke -i-get</dd>
            </dl>
            <dl>
              <dt>Engine Capacity</dt>
              <dd>155c</dd>
              <dt>Fuel system</dt>
              <dd>Electronic injection</dd>
              <dt>Lubrication</dt>
              <dd>Oil with wet sump</dd>
              <dt>Max Power</dt>
              <dd>12.9hp (9.6kW) @ 7,750 rpm</dd>
              <dt>Max Torque</dt>
              <dd>9.58 ft-lbs (13 Nm) @ 5250 rpm</dd>
              <dt>Transmission</dt>
              <dd>Automatic CVT</dd>
              <dt>Starter</dt>
              <dd>Electric</dd>
            </dl>
        </div>
    );
};

export default ScrollPanelSpecs;