import React from "react";
import { Image } from "react-native";

export default function ImageAtom({ source, resizeMode, style }) {
  const imageStyle = {
    ...style, 
  };

  return <Image source={source} resizeMode={resizeMode} style={imageStyle} />;
}