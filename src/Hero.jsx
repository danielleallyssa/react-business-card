export default function Hero() {
  return (
    <header>
      <img
        src="src/assets/bw-headshot.png"
        alt="Danielle Headshot"
        width="500"
      />
      <div className="content">
        <h1 className="name">Danielle Brown</h1>
        <h2 className="title">Front-End Developer & Designer</h2>
        <a
          href="https://www.danielleallyssa.com/"
          target="_blank"
          className="website--link"
        >
          danielleallyssa.com
        </a>
        <div className="social--links">
          <a className="email" href="mailto:hello@danielleallyssa.com">
            Email
          </a>
          <a
            className="linkedin"
            href="https://www.linkedin.com/in/danielleabrown/"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </header>
  );
}
