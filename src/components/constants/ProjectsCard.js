import {
  Card,
  Group,
  Image,
  Text,
  Badge,
  Button,
  Indicator,
} from "@mantine/core";
import React from "react";
import { useDisclosure } from "@mantine/hooks";
import FullProjectCard from "../FullProjectCard";

const ProjectsCard = (props) => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div className="w-[32%] lg-mx:w-[46%]">
      <Card
        data-aos="fade-up"
        data-aos-duration="800"
        onClick={open}
        className="!bg-bgColor !border-primaryColor cursor-pointer hover:scale-[1.02]
      transition-transform duration-300 ease-in-out hover:shadow-[0_0_10px_1px_#64FFDA] mb-5 border-2"
        
        shadow="lg"
        padding="sm"
        radius="lg"
        withBorder
      >
        <Card.Section className="p-3">
          <Image
            className="!rounded-xl shadow-[0_0_5px_0_#64FFDA]"
            src={props.image}
            alt={props.image}
          />
        </Card.Section>

        <Group justify="space-between" mt="xs" mb="xs">
          <Text className="!text-2xl !font-bold !text-white gap-2 flex items-center">
            {props.title}
            {props.live === true && (
              <Badge
              className="px-1"
                variant="outline"
                color="red"
                rightSection={
                  <Indicator
                  className="mr-0.5"
                    color="red"
                    position="middle-end"
                    size={7}
                    processing
                  ></Indicator>
                }
              >
                Live
              </Badge>
            )}
          </Text>
        </Group>

        <Group mb="xs">
          {props.technologies.map(
            (tech, index) =>
              index < 3 && (
                <Badge key={index} size="lg" variant="light" color="#64FFDA">
                  {tech}
                </Badge>
              )
          )}
        </Group>

        <Text className="text-justify" size="sm" c="dimmed" lineClamp={5}>
          {props.desc}
        </Text>

        <Button
          onClick={open}
          className="!bg-bgColor !text-primaryColor !border-primaryColor hover:!bg-bgHover"
          fullWidth
          mt="md"
          radius="md"
        >
          Show more
        </Button>
      </Card>
      <FullProjectCard
        opened={opened}
        close={close}
        title={props.title}
        desc={props.desc}
        image={props.image}
        live={props.live}
        link={props.link}
        github={props.github}
        technologies={props.technologies}
      />
    </div>
  );
};

export default ProjectsCard;
