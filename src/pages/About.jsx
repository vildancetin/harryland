const About = () => {
  return (
    <div>
      <div className="relative">
        <img
          src="https://images.ctfassets.net/usf1vwtuqyxm/2phT56DSucuUqU6Icm6mCe/79c7ad7bca59b0626fe4e2e80d188ca5/HogwartsCastle_WB_F4_HogwartsThroughTheTrees_Illust_100615_Land.jpg?w=1440&fm=webp&q=70"
          alt="castle"
        />
        <div className="absolute top-1/3 text-white left-20 w-1/3 small-font">
          <p className="text-3xl font-extrabold tracking-wider">FEATURE</p>
          <p className="text-2xl capitalize font-bold leading-8">Behind the scenes: Designing Hogwarts castle</p>
        </div>
      </div>

      <article className="mb-5 w-3/5 mx-auto">
        <p className="text-xl leading-6 font-semibold tracking-wide py-5">
          <span className="text-5xl text-[#AA8855]">V</span>isualising a
          location as iconic as Hogwarts for a major motion picture is no easy
          task. It takes research, imagination – and sometimes a bit of
          cheating.
        </p>
        <img
          src="https://images.ctfassets.net/usf1vwtuqyxm/6W1aXpwmaWu4SY2CmwAeOy/a0e77d4027a73c026ce52665ee8d4734/Hogwarts_WB_F2_HogwartsViewedThroughTheTrees_Illust_100615_Land.jpg?w=768&q=70&fm=webp"
          alt=""
        />
      </article>
      <article className="m-4 mb-5 w-3/5 mx-auto">
        <p className="leading-6 font-lg font-semibold">
          Extracted from{" "}
          <em>Harry Potter Page to Screen: The Complete Filmmaking Journey.</em>
        </p>
        <span className="w-full h-1 bg-[#AA8855] block my-2"></span>
        <p className="font-semibold leading-6 mb-3">
          <a
            href="https://www.wizardingworld.com/"
            target="_blank"
            className="underline"
          >
            Hogwarts School of Witchcraft and Wizardry
          </a>{" "}
          had to be grounded in reality. ‘An early decision was not to make it
          whimsical, not to make it a fairy-tale castle, but to make it heavy,
          enduring, and real,’ explains production designer Stuart Craig. ‘Here
          is a story about an English public school, so we made it as much like
          one as we possibly could.’
        </p>
        <img
          src="https://images.ctfassets.net/usf1vwtuqyxm/1oz9lDsfLCCWWo8es6Uq08/d3537c7d0744b94fc07039c765c65f40/HogwartsCastle_WB_F3_HogwartsCourtyardWithHarryAndHedwig_Still_100615_Land.jpg?w=768&q=70&fm=webp"
          alt=""
        />
      </article>
      <article className="mb-5 w-3/5 mx-auto">
        <p className="font-semibold mb-5">
          And so Craig looked first to ‘the two great universities in England –
          Oxford and Cambridge. But we also went to the great European
          cathedrals. We wanted Hogwarts to be in the medieval gothic style,
          which is strong and dynamic, and so we cherry-picked from everywhere –
          the best from the universities, the best from the cathedrals – and
          then slammed them together.’
          <br />
          <br />
          Although designed to look and feel like an enduring institution,
          Hogwarts has evolved to match the needs of the story over the course
          of eight films.
        </p>
        <img
          src="https://images.ctfassets.net/usf1vwtuqyxm/2phT56DSucuUqU6Icm6mCe/79c7ad7bca59b0626fe4e2e80d188ca5/HogwartsCastle_WB_F4_HogwartsThroughTheTrees_Illust_100615_Land.jpg?w=768&q=70&fm=webp"
          alt=""
        />
      </article>
      <article className="m-4 mb-5 w-3/5 mx-auto">
        <p className="font-semibold">
          ‘The way to go would have been able to read right through the seven
          books when we started,’ Craig laughs. ‘But I think some of these
          changes and additions have added a level of interest to the films.
          We’ve moved things around, let things expand, had them develop, or
          made them disappear altogether.’
        </p>
      </article>
        <section className="w-3/5 mx-auto ">
          <img
          className="mb-5"
            src="https://images.ctfassets.net/usf1vwtuqyxm/7Fm5Q4LRJYOE0aySoOE8gW/e315a5852c9de10da9ec7d71eeab07fa/HogwartsCastle_WB_F5_HogwartsAndHogsmeadeStation_Illust_100615_Port.jpg?w=768&q=70&fm=webp"
            alt=""
          />
          <img
          className="mb-5"
            src="https://images.ctfassets.net/usf1vwtuqyxm/4j6x7iMI88aicYasciiMsm/ebe15036f6c78846c3e8b2fde3ea5795/HogwartsCastle_WB_F5_HogwartsCastleIllustration_Illust_080615_Land.jpg?w=768&q=70&fm=webp"
            alt=""
          />
          <img
            src="https://images.ctfassets.net/usf1vwtuqyxm/1GfgwuXgDqAu8EKKGGOCSw/48059019f591473ef428d3a60ebd3952/Harry-Potter-Page-to-Screen-Cover.jpg?w=768&q=70&fm=webp"
            alt=""
          />
        </section>

    </div>
  );
};

export default About;
