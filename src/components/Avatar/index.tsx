import React, { useMemo } from 'react';

import { Container, DefaultImage, Image, DefaultImageText } from './styles';

interface IProps {
  baseProfile: any;
  containerWidth: string;
  imageContainerWidth: string;
  borderRadius: string;
  alignCenter?: boolean;
}

export default function Avatar({
  baseProfile,
  containerWidth,
  imageContainerWidth,
  borderRadius,
  alignCenter,
}: IProps) {
  const profile = useMemo(() => {
    const acronymName = baseProfile?.name
      .split(/\s/)
      .reduce((response, word) => (response += word.slice(0, 1)), '');

    return {
      ...baseProfile,
      acronymName: acronymName.replace(/[^A-Z]/g, ''),
    };
  }, []);

  return (
    <Container width={containerWidth} alignCenter={alignCenter}>
      {profile?.avatar?.url ? (
        <DefaultImage
          width={imageContainerWidth}
          height={imageContainerWidth}
          borderRadius={borderRadius}
        >
          <Image source={{ uri: profile.avatar.url }} />
        </DefaultImage>
      ) : (
        <DefaultImage
          backgroundColor="#F4EFFC"
          width={imageContainerWidth}
          height={imageContainerWidth}
          borderRadius={borderRadius}
        >
          <DefaultImageText>{profile.acronymName}</DefaultImageText>
        </DefaultImage>
      )}
    </Container>
  );
}
