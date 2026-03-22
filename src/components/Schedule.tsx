import { useState } from 'react';
import dayjs from 'dayjs';
import '../dayjs-config';
import { Flex, Heading, IconButton, SegmentedControl, Avatar, Text } from '@radix-ui/themes';
import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons';

const Schedule = () => {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [viewType, setViewType] = useState<'day' | 'week' | 'month'>('month');

  const events = [
    {
      id: '1',
      title: 'Y',
      date: dayjs().date(15),
      description: 'Morning yoga session',
      backgroundColor: '#3b82f6',
      color: 'white'
    },
    {
      id: '2',
      title: 'M',
      date: dayjs().date(15),
      description: 'Guided meditation workshop',
      backgroundColor: '#10b981',
      color: 'white'
    },
    {
      id: '3',
      title: 'B',
      date: dayjs().date(15),
      description: 'Breathwork workshop',
      backgroundColor: '#ef4444',
      color: 'white'
    },
    {
      id: '4',
      title: 'Y',
      date: dayjs().date(20),
      description: 'Evening yoga flow',
      backgroundColor: '#3b82f6',
      color: 'white'
    },
    {
      id: '5',
      title: 'M',
      date: dayjs().date(22),
      description: 'Mindfulness meditation',
      backgroundColor: '#10b981',
      color: 'white'
    }
  ];

  const getDaysInView = () => {
    if (viewType === 'day') {
      return [currentDate];
    } else if (viewType === 'week') {
      const startOfWeek = currentDate.startOf('week');
      const days = [];
      for (let i = 0; i < 7; i++) {
        days.push(startOfWeek.add(i, 'day'));
      }
      return days;
    } else {
      return getDaysInMonth();
    }
  };

  const getDaysInMonth = () => {
    const startOfMonth = currentDate.startOf('month');
    const endOfMonth = currentDate.endOf('month');
    const startOfWeek = startOfMonth.startOf('week');
    const endOfWeek = endOfMonth.endOf('week');

    const days = [];
    let day = startOfWeek;

    while (day.isBefore(endOfWeek) || day.isSame(endOfWeek)) {
      days.push(day);
      day = day.add(1, 'day');
    }

    return days;
  };

  const navigate = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      if (viewType === 'day') {
        setCurrentDate(currentDate.subtract(1, 'day'));
      } else if (viewType === 'week') {
        setCurrentDate(currentDate.subtract(1, 'week'));
      } else {
        setCurrentDate(currentDate.subtract(1, 'month'));
      }
    } else {
      if (viewType === 'day') {
        setCurrentDate(currentDate.add(1, 'day'));
      } else if (viewType === 'week') {
        setCurrentDate(currentDate.add(1, 'week'));
      } else {
        setCurrentDate(currentDate.add(1, 'month'));
      }
    }
  };

  const getEventsForDay = (day: dayjs.Dayjs) => {
    return events.filter(event => event.date.isSame(day, 'day'));
  };

  const days = getDaysInView();
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const renderDayView = () => {
    const day = days[0];
    const dayEvents = getEventsForDay(day);

    // Generate time slots from 6 AM to 10 PM
    const timeSlots: dayjs.Dayjs[] = [];
    for (let hour = 6; hour <= 22; hour++) {
      timeSlots.push(dayjs().hour(hour).minute(0).second(0));
    }

    return (
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="flex">
          <div className="w-20 flex items-center justify-center h-16 border-b border-gray-200">
            <Flex className="w-full h-full">
              <Flex align="center" justify="center" className="border-r border-gray-200 flex-1 h-full">
                <IconButton size="1" variant="ghost" onClick={() => navigate('prev')} className="flex-1 h-full">
                  <ArrowLeftIcon />
                </IconButton>
              </Flex>
              <Flex align="center" justify="center" className="border-r border-gray-200 flex-1 h-full">
                <IconButton size="1" variant="ghost" onClick={() => navigate('next')} className="flex-1 h-full">
                  <ArrowRightIcon />
                </IconButton>
              </Flex>
            </Flex>
          </div>
          <div className="flex-1 p-4 border-b border-gray-200 flex items-center justify-center">
            {/* <Heading size="3">{day.format('dddd, MMMM D, YYYY')}</Heading> */}
          </div>
        </div>
        <div className="flex">
          {/* Time slots column */}
          <div className="w-20 border-r border-gray-200">
            {timeSlots.map((time, index) => (
              <div key={index} className={`h-16 flex items-center justify-center text-xs text-gray-500 ${index === timeSlots.length - 1 ? '' : 'border-b border-gray-200'
                }`}>
                {time.format('h A')}
              </div>
            ))}
          </div>

          {/* Events column */}
          <div className="flex-1">
            {timeSlots.map((time, index) => {
              const eventsAtTime = dayEvents.filter(event => {
                // For demo purposes, let's assign some events to specific times
                if (event.title === 'Y' && time.hour() === 10) return true;
                if (event.title === 'M' && time.hour() === 10) return true;
                if (event.title === 'B' && time.hour() === 10) return true;
                return false;
              });

              return (
                <div key={index} className={`h-16 relative ${index === timeSlots.length - 1 ? '' : 'border-b border-gray-200'
                  }`}>
                  {eventsAtTime.length > 0 && (
                    <div className="absolute left-1 md:left-2 top-2">
                      {eventsAtTime.slice(0, 3).map((event, eventIndex) => (
                        <Avatar
                          key={event.id}
                          size={{ initial: "1", md: "2" }}
                          fallback={event.title}
                          style={{
                            backgroundColor: event.backgroundColor,
                            color: event.color,
                            marginLeft: eventIndex > 0 ? '-8px' : '0',
                            border: '1px solid white'
                          }}
                          className="text-xs font-bold"
                        />
                      ))}
                      {eventsAtTime.length > 3 && (
                        <Avatar
                          size={{ initial: "1", md: "2" }}
                          fallback={`+${eventsAtTime.length - 3}`}
                          variant="solid"
                          color="gray"
                          style={{
                            marginLeft: '-8px',
                            border: '1px solid white'
                          }}
                          className="text-xs font-bold"
                        />
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  const renderWeekView = () => {
    // Generate time slots from 6 AM to 10 PM
    const timeSlots: dayjs.Dayjs[] = [];
    for (let hour = 6; hour <= 22; hour++) {
      timeSlots.push(dayjs().hour(hour).minute(0).second(0));
    }

    return (
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="flex">
          {/* Navigation controls */}
          <div className="w-16 md:w-20 flex flex-col flex-shrink-0">
            <div className="flex items-center justify-center h-16 border-b border-gray-200">
              <Flex className="w-full h-full">
                <Flex align="center" justify="center" className="border-r border-gray-200 flex-1 h-full">
                  <IconButton size="1" variant="ghost" onClick={() => navigate('prev')} className="flex-1 h-full">
                    <ArrowLeftIcon />
                  </IconButton>
                </Flex>
                <Flex align="center" justify="center" className="border-r border-gray-200 flex-1 h-full">
                  <IconButton size="1" variant="ghost" onClick={() => navigate('next')} className="flex-1 h-full">
                    <ArrowRightIcon />
                  </IconButton>
                </Flex>
              </Flex>
            </div>
            {/* Time slots */}
            {timeSlots.map((time, index) => (
              <div key={index} className={`h-16 flex items-center justify-center text-xs text-gray-500 border-r border-gray-200 ${index === timeSlots.length - 1 ? '' : 'border-b border-gray-200'
                }`}>
                {time.format('h A')}
              </div>
            ))}
          </div>

          {/* Scrollable content area (header + content together) */}
          <div className="flex-1 overflow-x-auto md:overflow-x-visible">
            <div className="min-w-max md:flex-1">
              {/* Header */}
              <div className="flex border-b border-gray-200">
                {days.map((day, index) => (
                  <div key={index} className="p-2 text-center min-w-[80px] md:flex-1 md:min-w-0 border-r border-gray-200 last:border-r-0 h-16 flex flex-col justify-center">
                    <div className="text-sm font-medium text-gray-700">{weekDays[index]}</div>
                    <div className="text-xs text-gray-500">{day.format('D')}</div>
                  </div>
                ))}
              </div>

              {/* Content */}
              <div className="flex">
                {days.map((day, dayIndex) => {
                  const dayEvents = getEventsForDay(day);

                  return (
                    <div key={dayIndex} className={`min-w-[80px] md:flex-1 md:min-w-0 border-r border-gray-200 last:border-r-0`}>
                      {timeSlots.map((time, timeIndex) => {
                        const eventsAtTime = dayEvents.filter(event => {
                          // Check if the day matches the event date and time matches
                          if (!day.isSame(event.date, 'day')) return false;
                          if (event.title === 'Y' && time.hour() === 10) return true;
                          if (event.title === 'M' && time.hour() === 10) return true;
                          if (event.title === 'B' && time.hour() === 10) return true;
                          return false;
                        });

                        return (
                          <div key={timeIndex} className={`h-16 relative ${timeIndex === timeSlots.length - 1 ? '' : 'border-b border-gray-200'
                            }`}>
                            {eventsAtTime.length > 0 && (
                              <div className="absolute left-1 md:left-2 top-2">
                                {eventsAtTime.slice(0, 3).map((event, eventIndex) => (
                                  <Avatar
                                    key={event.id}
                                    size={{ initial: "1", md: "2" }}
                                    fallback={event.title}
                                    style={{
                                      backgroundColor: event.backgroundColor,
                                      color: event.color,
                                      marginLeft: eventIndex > 0 ? '-8px' : '0',
                                      border: '1px solid white'
                                    }}
                                    className="text-xs font-bold"
                                  />
                                ))}
                                {eventsAtTime.length > 3 && (
                                  <Avatar
                                    size={{ initial: "1", md: "2" }}
                                    fallback={`+${eventsAtTime.length - 3}`}
                                    variant="solid"
                                    color="gray"
                                    style={{
                                      marginLeft: '-8px',
                                      border: '1px solid white'
                                    }}
                                    className="text-xs font-bold"
                                  />
                                )}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderMonthView = () => {
    // Group days by week for better mobile layout
    const weeks: dayjs.Dayjs[][] = [];
    for (let i = 0; i < days.length; i += 7) {
      weeks.push(days.slice(i, i + 7));
    }

    return (
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="flex">
          {/* Week indicator column */}
          <div className="w-16 md:w-20 flex flex-col flex-shrink-0">
            <div className="h-12 border-b border-gray-200"></div>
            {weeks.map((_, weekIndex) => (
              <div key={weekIndex} className="flex-1 flex items-center justify-center text-xs text-gray-500 border-r border-gray-200 min-h-[80px] border-b border-gray-200 last:border-b-0">
                Week {weekIndex + 1}
              </div>
            ))}
          </div>

          {/* Scrollable content area (header + content together) */}
          <div className="flex-1 overflow-x-auto md:overflow-x-visible">
            <div className="min-w-max md:w-full">
              {/* Header with week days */}
              <div className="flex border-b border-gray-200">
                {weekDays.map((day: string) => (
                  <div key={day} className="p-3 text-center min-w-[80px] md:flex-1 md:min-w-0 text-sm font-medium text-gray-700 h-12 flex items-center justify-center">
                    {day}
                  </div>
                ))}
              </div>

              {/* Weeks content */}
              {weeks.map((week, weekIndex) => (
                <div key={weekIndex} className="flex border-b border-gray-200 last:border-b-0">
                  {week.map((day, dayIndex) => {
                    const isCurrentMonth = day.isSame(currentDate, 'month');
                    const isToday = day.isSame(dayjs(), 'day');
                    const dayEvents = getEventsForDay(day);
                    const isLastDay = dayIndex === week.length - 1;

                    return (
                      <div
                        key={`${weekIndex}-${dayIndex}`}
                        className={`min-h-[80px] min-w-[80px] md:flex-1 md:min-w-0 p-2 ${!isLastDay ? 'border-r border-gray-200' : ''
                          } ${!isCurrentMonth ? 'bg-gray-50 text-gray-400' : 'bg-white'
                          } ${isToday ? 'bg-blue-50' : ''}`}
                      >
                        <div className={`text-sm font-medium mb-1 ${isToday ? 'text-blue-600' : ''
                          }`}>
                          {day.format('D')}
                        </div>
                        <div className="space-y-1">
                          {dayEvents.length > 0 && (
                            <div className="relative flex justify-center" style={{ height: '20px' }}>
                              {dayEvents.slice(0, 3).map((event, eventIndex) => (
                                <Avatar
                                  key={event.id}
                                  size="1"
                                  fallback={event.title}
                                  style={{
                                    backgroundColor: event.backgroundColor,
                                    color: event.color,
                                    position: 'absolute',
                                    left: `${eventIndex * 12}px`,
                                    border: '1px solid white'
                                  }}
                                  className="text-xs font-bold"
                                />
                              ))}
                              {dayEvents.length > 3 && (
                                <Avatar
                                  size="1"
                                  fallback={`+${dayEvents.length - 3}`}
                                  variant="solid"
                                  color="gray"
                                  style={{
                                    position: 'absolute',
                                    left: `${Math.min(3, dayEvents.length) * 12}px`,
                                    border: '1px solid white'
                                  }}
                                  className="text-xs font-bold"
                                />
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full">
      {/* Header */}
      <Flex className="py-2" align="center">
        <Heading size={
          {
            initial: "2",
            md: "4"
          }
        } className="flex-1">
          {viewType === 'day' ? currentDate.format('MMMM D, YYYY') :
            viewType === 'week' ? `${currentDate.startOf('week').format('MMM D')} - ${currentDate.endOf('week').format('MMM D, YYYY')}` :
              currentDate.format('MMMM YYYY')}
        </Heading>
        <Flex gap="4" align="center">
          <SegmentedControl.Root
            defaultValue="month"
            value={viewType}
            onValueChange={(value: 'day' | 'week' | 'month') => setViewType(value)}
          >
            <SegmentedControl.Item value="day">Day</SegmentedControl.Item>
            <SegmentedControl.Item value="week">Week</SegmentedControl.Item>
            <SegmentedControl.Item value="month">Month</SegmentedControl.Item>
          </SegmentedControl.Root>
        </Flex>
      </Flex>

      {/* Legend */}
      <Flex className="py-2" align="center" gap="6" justify="center">
        <Flex align="center" gap="2">
          <Avatar size="1" fallback="Y" style={{ backgroundColor: '#3b82f6', color: 'white' }} className="text-xs font-bold" />
          <Text size="1" className="text-gray-600">Yoga</Text>
        </Flex>
        <Flex align="center" gap="2">
          <Avatar size="1" fallback="M" style={{ backgroundColor: '#10b981', color: 'white' }} className="text-xs font-bold" />
          <Text size="1" className="text-gray-600">Meditation</Text>
        </Flex>
        <Flex align="center" gap="2">
          <Avatar size="1" fallback="B" style={{ backgroundColor: '#ef4444', color: 'white' }} className="text-xs font-bold" />
          <Text size="1" className="text-gray-600">Breathwork</Text>
        </Flex>
      </Flex>

      {/* Calendar Content */}
      {viewType === 'day' && renderDayView()}
      {viewType === 'week' && renderWeekView()}
      {viewType === 'month' && renderMonthView()}
    </div>
  );
};

export default Schedule;
