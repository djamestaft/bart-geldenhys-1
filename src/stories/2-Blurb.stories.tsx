import React from "react"
import Blurb from '../components/Archetypes/Blurb/Blurb';

export default {
  title: "Archetypes",
}

export const blurb = () => (
  <div style={{ padding: "16px", backgroundColor: "#eeeeee" }}>
    <Blurb 
      blurbText={
        'Hello my name is doctor greenthumb id like to tell you just where Im from'+
        'Hello my name is doctor greenthumb id like to tell you just where Im from'+
        'Hello my name is doctor greenthumb id like to tell you just where Im from'+
        'Hello my name is doctor greenthumb id like to tell you just where Im from'+
        'Hello my name is doctor greenthumb id like to tell you just where Im from'+
        'Hello my name is doctor greenthumb id like to tell you just where Im from'
      }/>
  </div>
)