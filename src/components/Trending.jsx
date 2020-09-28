import React from 'react';
import Carousel from "semantic-ui-carousel-react";
import { Image, Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";


const Trending = (props) => 
{

    let elements =
     [
        {
          render: () => {
            return (
                <figure>
                    <Image 
                        src= "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5b8d2b12-21e8-4931-8a6d-fb9ecdd60383/ddhlq1q-7e42694d-bb18-4a1a-9125-49e12e023108.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNWI4ZDJiMTItMjFlOC00OTMxLThhNmQtZmI5ZWNkZDYwMzgzXC9kZGhscTFxLTdlNDI2OTRkLWJiMTgtNGExYS05MTI1LTQ5ZTEyZTAyMzEwOC5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.Fxu32f_9UotrU3jt5zVnDgasSJSc8HuFxqVG08F3a6A" 
                        style={{height: "400px", width: "400px"}}
                    />
                    <figcaption>Joker Costume</figcaption>
                </figure>
            );
          }
        },
        
        {
          render: () => {
            return(
            <figure>
                <Image 
                    src="https://lh3.googleusercontent.com/proxy/EOw383wWCYsKl549UaovkXq7iLEblzXqHSsmYqzBmHUi8ZiNYdKjWYcrCWjocSXI1hNfEiCh_vgGAA4uoJHGahp2-B4VMHTjjkdU4wzYh7wqhA0X_SJ0VqHNnEwoWL_SmMuDQ4hGVOjpXGHkLswY_u9eYrqxzkj1gO5o" 
                    style={{height: "400px", width: "500px"}}
                />
                 <figcaption>Maleficent Costume</figcaption>
            </figure>
             )}
          
            },
        {
          render: () => {
            return (
                <figure>
                    <Image 
                        src="https://s1.cnnx.io/bizrate/editorial/0909_halloween/HalloweenMen_ZombieCostume1.png" 
                        style={{height: "400px", width: "300px"}}
                    />
                    <figcaption>Zombie Costume</figcaption>
              </figure>
              );
          }
        },
        {
            render: () => {
              return (
                <figure>
                    <Image 
                        src="https://images.ctfassets.net/50gzycvace50/7xlHtePC2iObAJPYMVs52q/2590e4339b517cefea8713ff13db50a1/toddler-rainbow-halloween-costume.png" 
                        style={{height: "400px", width: "300px"}}
                    />
                    <figcaption>Rainbow Costume</figcaption>
                </figure>
                );
            }
        }
     ]
      return (
        <div style={{ width: 300 }}>
          <Carousel
            elements={elements}
            duration={5000}
            animation="slide left"
            showNextPrev={false}
            showIndicators={true}
          />
        </div>
      )
}


        

 
export default Trending;