${kafkaConfiguration.kafka.prefix:-devdarth}-multiEditAddEditTopic.Ready // doesn't work

${kafkaConfiguration.kafka.prefix:-devdarth}-myNameIsKatherine.Ready // search for myNameIsKatherine, doesn't work

multiEditAddEditTopic.Ready // works
${kafkaConfiguration.kafka.prefix:-devdarth}- multiEditAddEditTopic.Ready // works
${kafkaConfiguration.kafka.prefix:-devdarth} -multiEditAddEditTopic.Ready // doesn't work
