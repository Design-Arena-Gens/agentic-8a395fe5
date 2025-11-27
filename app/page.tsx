export default function Page() {
  return (
    <main className="page">
      <section className="scene">
        <div className="carpenter">
          <div className="shadow" />
          <div className="torso">
            <div className="strap strap-left" />
            <div className="strap strap-right" />
            <div className="belt">
              <div className="tool hammer" />
              <div className="tool screwdriver" />
              <div className="tool chisel" />
            </div>
          </div>
          <div className="head">
            <div className="cap">
              <div className="cap-visor" />
            </div>
            <div className="eye eye-left" />
            <div className="eye eye-right" />
            <div className="beard" />
          </div>
          <div className="arm arm-left">
            <div className="forearm" />
            <div className="hand" />
          </div>
          <div className="arm arm-right">
            <div className="forearm" />
            <div className="hand hand-support" />
          </div>
          <div className="leg leg-left">
            <div className="calf" />
            <div className="boot" />
          </div>
          <div className="leg leg-right">
            <div className="calf" />
            <div className="boot" />
          </div>
          <div className="wood" />
        </div>
        <div className="foreground">
          <div className="grass" />
          <div className="grass grass-2" />
          <div className="grass grass-3" />
        </div>
        <div className="background">
          <div className="sun" />
          <div className="cloud cloud-1" />
          <div className="cloud cloud-2" />
          <div className="cloud cloud-3" />
        </div>
      </section>
      <footer className="caption">Carpenter At Work</footer>
    </main>
  );
}
