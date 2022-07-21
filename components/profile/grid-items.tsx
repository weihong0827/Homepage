import NextLink from 'next/link'
import Image from 'next/image'
import { StaticImageData } from 'next/image'
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({
  children,
  href,
  title,
  thumbnail
}: {
  children: React.ReactNode
  href: string
  title: string
  thumbnail: StaticImageData
}) => {
  return (
    <Box width="100%" alignItems="center">
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
          loading="lazy"
        />
        <LinkOverlay href={href} target="_blank">
          <Text mt={2}>{title}</Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </Box>
  )
}
export const ProjectGridItem = ({
  children,
  id,
  title,
  thumbnail
}: {
  children: React.ReactNode
  id: string
  title: string
  thumbnail: StaticImageData
}) => (
  <Box w="100%" alignItems="center">
    <NextLink href={`/projects/${id}`}>
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          // placeholder="blur"
          loading="lazy"
        />
        <LinkOverlay href={`/works/${id}`}>
          <Text mt={2} fontSize={20}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </NextLink>
  </Box>
)

export const GridItemStyle = () => (
  <Global
    styles={`
  .grid-item-thumbnail{
    border-radius:12px;
  }
`}
  />
)
