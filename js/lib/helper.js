export const formatSessionData = sessions => {
  //   console.log('*********************' + sessions);
  if (sessions.length > 0) {
    const newSessions = sessions.reduce((acc, curr) => {
      const timeExists = acc.find(section => section.title === curr.startTime);
      timeExists
        ? timeExists.data.push(curr)
        : acc.push({ title: curr.startTime, data: [curr] });
      return acc;
    }, []);
    // .console.log('NEW *********************' + newSessions);
    return newSessions;
  }
};
