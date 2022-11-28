${kafkaConfiguration.kafka.prefix:-devdarth}-multiEditAddEditTopic.Ready // doesn't work

${kafkaConfiguration.kafka.prefix:-devdarth}-myNameIsKatherine.Ready // search for myNameIsKatherine, doesn't work

${kafkaConfiguration.kafka.prefix:-devdarth}- multiEditAddEditTopic.Ready // works
${kafkaConfiguration.kafka.prefix:-devdarth} -multiEditAddEditTopic.Ready // doesn't work

${kafkaConfigurationConfiguration.kafka.prefix:-devdarth} -multiEditAddEditTopic.Ready // doesn't work

${kafkaConfigurationConfiguration.kafka.prefix:-devDarth} -multiEditAddEditTopic.Ready // doesn't work
${kafkaConfigurationConfiguration.kafka.prefix:-devDarthDarth} -multiEditAddEditTopic.Ready // doesn't work

myNameIsNeil

${-kafkaConfigTest.kafka.prefix:-devDarthDarth} -multiEditAddEditTopic.Ready // doesn't work
${kafkaRonfigTest.kafka.prefix:-devDarthDarth} -multiEditAddEditTopic.Ready // doesn't work
