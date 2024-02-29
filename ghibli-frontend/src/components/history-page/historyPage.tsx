import "./historyPage.css";

const HistoryPage = () => {
  const image = {
    backgroundImage: `url(${"https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Studio_Ghibli_studio_3.jpg/800px-Studio_Ghibli_studio_3.jpg"})`,
    // backgroundImage: `url(${"https://news.mywaifulist.moe/wp-content/uploads/2021/01/animedad.jpg"})`,
    width: "400px",
    height: "",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="historyPageParentContainer">
      <div className="historyPageContainer">
        <div className="aboutStudioGhibliHistoryContainer">
          <div className="studioGhibliImageContainer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Studio_Ghibli_studio_3.jpg/800px-Studio_Ghibli_studio_3.jpg"
              alt=""
            />
            <div className="nameContainer">
              <span>Studio Ghubli - Koganei, Tokyo</span>
            </div>
          </div>
          <div className="AboutGhibliStudioContainer">
            <div className="aboutTitle">About Studio Ghibli</div>
            <div>
              Studio Ghibli was founded in 1985 by animated film directors Isao
              Takahata and Hayao Miyazaki, and has produced twenty-two
              feature-length films. Most Studio Ghibli films ranked number one
              at the box office in Japan in the year in which they were
              released. SPIRITED AWAY, directed by Hayao Miyazaki and released
              in 2001, is the all-time highest grossing film in Japan, earning
              over 30 billion yen at the box office.
            </div>
            <div>
              Studio Ghibli films have garnered numerous awards and critical
              acclaim from film critics and animation specialists around the
              world. SPIRITED AWAY was awarded the Golden Bear as the Best
              Feature Film at the 2002 Berlin International Film Festival and
              won the 2002 Academy Award for Best Animated Feature Film. In
              October 2001, Studio Ghibli, in conjunction with The Tokuma
              Memorial Cultural Foundation for Animation, founded the Ghibli
              Museum, Mitaka, designed by Hayao Miyazaki.
            </div>
            <div>
              THE WIND RISES (2013),THE TALE OF THE PRINCESS KAGUYA (2013), WHEN
              MARNIE WAS THERE (2014) and THE RED TURTLE (2016), the last four
              films released by Studio Ghibli, have earned the studio four
              consecutive Academy Award nominations for Best Animated Feature
              Film. The studio is currently working on a new production.
            </div>
            <a href="https://w.wiki/3hoP" target="_blank">
              More Details
            </a>
          </div>
        </div>
      </div>
      <hr />
      <div className="aboutGhibliStudioFounderContainer">
        <div className="AboutGhibliStudioContainer">
          <div className="aboutTitle">
            About Hayao Miyazaki (Ghibli Founder)
          </div>
          <div>
            Hayao Miyazaki, born on January 5, 1941, in Tokyo, is a legendary
            Japanese animator, filmmaker, and co-founder of Studio Ghibli, a
            powerhouse in the animation industry. Miyazaki's illustrious career
            has spanned over several decades, during which he has created some
            of the most beloved and critically acclaimed animated films in
            history. His works are distinguished by their enchanting
            storytelling, multidimensional characters, and a profound connection
            to nature.
          </div>
          <div>
            Miyazaki's thematic exploration often revolves around
            environmentalism, pacifism, and the symbiotic relationship between
            humanity and the natural world. His iconic films, including "My
            Neighbor Totoro," "Spirited Away," and "Princess Mononoke," have
            captivated audiences worldwide with their imaginative narratives and
            visually stunning animation. In 2003, "Spirited Away" won the
            Academy Award for Best Animated Feature, solidifying Miyazaki's
            global impact and influence.
          </div>
          <div>
            Beyond his creative prowess, Miyazaki is celebrated for his staunch
            advocacy of hand-drawn animation, expressing a preference for the
            artistry of traditional techniques over the prevalent use of
            computer-generated imagery (CGI). This commitment to preserving the
            craft of animation has not only contributed to the unique charm of
            his films but has also inspired a generation of animators to embrace
            the beauty of hand-crafted storytelling. Miyazaki's enduring legacy
            extends far beyond his filmography, as his principles and dedication
            continue to shape the landscape of animation and garner him a
            revered status in the industry.
          </div>
          <a
            href="https://en.wikipedia.org/w/index.php?title=Hayao_Miyazaki&oldid=1208701164"
            target="_blank"
          >
            More Details
          </a>
        </div>
        <div className="studioGhibliImageContainer">
          <img
            src="https://news.mywaifulist.moe/wp-content/uploads/2021/01/animedad.jpg"
            alt=""
          />
          <div className="nameContainer">
            <span>Hayao Miyazaki</span>
            <span>Studio Ghibli Founder</span>
          </div>
        </div>
      </div>
      <hr />
      <div className="aboutGhibliStudioMuseumContainer">
        <div className="studioGhibliImageContainer">
          <img
            src="https://i.pinimg.com/564x/34/b5/38/34b538f256da24978db124df622df3a5.jpg"
            alt=""
          />
          <div className="nameContainer">
            <span>The Ghibli Museum in Mitaka, Japan</span>
          </div>
        </div>
        <div className="AboutGhibliStudioContainer">
          <div className="aboutTitle">About Ghibli Museum</div>
          <div>
            The Ghibli Museum of The Forest of Mitaka, otherwise known as the
            Ghibli Museum (三鷹の森ジブリ美術館 , Mitaka Nomori Jiburi
            Bijutsukan lit. Ghibli Museum, Mitaka), is an animation museum in
            Nishien, Inokashira Park in Mitaka City, Tokyo. Its official name is
            Mitaka Municipal Animation Museum. It was developed by Hayao
            Miyazaki and opened on October 1, 2001.
          </div>
          <div>
            As the name suggests, many Ghibli-related exhibits are stored and on
            display. The building itself was designed based on a cross-section
            sketch by Hayao Miyazaki. Studio Ghibli has also produced short
            animated films, along with permanent exhibitions such as Film Guru
            Guru that are viewed exclusively screened in the museum, and many
            former Ghibli directors have been appointed to oversee the museum,
            such as Goro Miyazaki.
          </div>
          <div>
            Since 2007, the Ghibli Museum Library in Mitaka has screened and
            distributed animated films from around the world, such as The
            Illusionist (2010) by Sylvain Chomet, Wrinkles (Arrugas, 2011) by
            Ignacio Ferreras and My Love (2006) by Aleksandr Petrov.
          </div>
          <a href="https://en.wikipedia.org/wiki/Ghibli_Museum" target="_blank">
            More Details
          </a>
        </div>
      </div>
      <hr />
      <div className="creater">
        This website is created by{" "}
        <a href="https://github.com/KhantMinTuKha" target="_blank">
          KhantMinTukha
        </a>
      </div>
    </div>
  );
};

export default HistoryPage;
