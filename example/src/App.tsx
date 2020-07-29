import React from 'react';
import { BracketGenerator, Tree} from 'tournament-bracket-tree';
import 'tournament-bracket-tree/dist/index.css';

const App = () => {

  interface Show {
    img: string;
    link: string;
  }
  const shows: Tree<Show> = {
    data: {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/This_Is_Us_%28Logo%29.png/500px-This_Is_Us_%28Logo%29.png',
      link: 'https://en.wikipedia.org/wiki/This_Is_Us'
    },
    left: {
      data: {
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/This_Is_Us_%28Logo%29.png/500px-This_Is_Us_%28Logo%29.png',
        link: 'https://en.wikipedia.org/wiki/This_Is_Us'
      },
      left: {
        data: {
          img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/This_Is_Us_%28Logo%29.png/500px-This_Is_Us_%28Logo%29.png',
          link: 'https://en.wikipedia.org/wiki/This_Is_Us'
        }
      },
      right: {
        data: {
          img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/NewGirlTitlesS5.jpg/500px-NewGirlTitlesS5.jpg',
          link: 'https://en.wikipedia.org/wiki/New_Girl'
        },
        left: {
          data: {
            img: 'https://upload.wikimedia.org/wikipedia/en/0/0d/Title_screen_for_Netflix%27s_Dead_to_Me.png',
            link: 'https://en.wikipedia.org/wiki/Dead_to_Me_(TV_series)'
          },
          left: {
            data: {
              img: 'https://upload.wikimedia.org/wikipedia/en/0/0d/Title_screen_for_Netflix%27s_Dead_to_Me.png',
              link: 'https://en.wikipedia.org/wiki/Dead_to_Me_(TV_series)'
            }
          }
        },
        right: {
          data: {
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/NewGirlTitlesS5.jpg/500px-NewGirlTitlesS5.jpg',
            link: 'https://en.wikipedia.org/wiki/New_Girl'
          }
        }
      }
    },
    right: {
      data: {
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/NewGirlTitlesS5.jpg/500px-NewGirlTitlesS5.jpg',
        link: 'https://en.wikipedia.org/wiki/New_Girl'
      },
      left: {
        data: {
          img: 'https://upload.wikimedia.org/wikipedia/en/0/0d/Title_screen_for_Netflix%27s_Dead_to_Me.png',
          link: 'https://en.wikipedia.org/wiki/Dead_to_Me_(TV_series)'
        },
        left: {
          data: {
            img: 'https://upload.wikimedia.org/wikipedia/en/0/0d/Title_screen_for_Netflix%27s_Dead_to_Me.png',
            link: 'https://en.wikipedia.org/wiki/Dead_to_Me_(TV_series)'
          }
        }
      },
      right: {
        data: {
          img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/NewGirlTitlesS5.jpg/500px-NewGirlTitlesS5.jpg',
          link: 'https://en.wikipedia.org/wiki/New_Girl'
        }
      }
    }
  }

  const mapShowToNode = (show: Show) => {
    return <div>
      <a href={show.link}><img height="50px" width="200px" src={show.img} alt="link"/></a>
    </div>;
  }

  return <div style={{height: '100%'}}>
    <BracketGenerator root={"bottom"} mapDataToNode={mapShowToNode} tree={shows}/>

  </div>
  
}

export default App;
