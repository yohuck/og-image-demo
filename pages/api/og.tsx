import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

export default function () {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: "column",
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
       
          <h1 style={{
            fontSize: 128,
            background: "#0f72b2",
            padding: "1rem",
            color: "white",
            height: "80%",
            margin: "1rem",
            fontWeight: "300",
          }}>Time<span style={{
            fontWeight: 900,
            color: "white",
          }}>Value</span></h1>


          <div style={{
            width: "100%",
            height: "2px",
            background: "black",
          }}></div>

          <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "20%",

          }}>
            <p style={{
              fontSize: 32,
              background: "white",
            }}>
              The Industry Leader in Ammortization Software & Financial Calculators since 1984
            </p>

            <p style={{
              fontSize: 32,
              fontWeight: "300",

            }}>
              Webinar: 2/27/2023 @ 5 PM 
              </p>
            </div>
      </div>
    ),
    {
      width: 1200,
      height: 600,
    },
  );
}
