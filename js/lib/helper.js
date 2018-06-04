export const formatSessionData = (sessions) => {
  if (sessions.length > 0) {
    const newSessions = sessions.reduce((acc, curr) => {
      const timeExists = acc.find(section => section.title === curr.startTime);
      timeExists ? timeExists.data.push(curr) : acc.push({ title: curr.startTime, data: [curr] });
      return acc;
    }, []);
    return newSessions;
  }
};
