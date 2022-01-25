import Image from "next/image";
import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src="/images/site/me.jpg" alt="" width={300} height={300} />
      </div>
      <h2>Hello, I am Beth</h2>
      <p>A software Developer based in Nairobi, Kenya
          Lorem Ipsum Dolar sit , Lorem Ipsum Dolar sit</p>
    </section>
  );
}

export default Hero;
