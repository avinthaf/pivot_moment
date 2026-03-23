import { Dialog, Flex, Heading, Text, Button, Separator } from "@radix-ui/themes";
import { Cross1Icon } from "@radix-ui/react-icons";
import { useCart } from "../context/CartContext";

interface EventDetails {
  id: string;
  title: string;
  date: any; // dayjs.Dayjs
  description: string;
  backgroundColor: string;
  color: string;
}

interface EventDetailsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  selectedDate: any; // dayjs.Dayjs
  events: EventDetails[];
}

const EventDetailsDrawer = ({ isOpen, onClose, selectedDate, events }: EventDetailsDrawerProps) => {
  if (!selectedDate) return null;

  const { addItem } = useCart();

  const getEventTitle = (title: string) => {
    switch (title) {
      case 'Y':
        return 'Yoga';
      case 'M':
        return 'Meditation';
      case 'B':
        return 'Breathwork';
      default:
        return title;
    }
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Content
        width={{ initial: "100dvw", md: "50dvw" }}
        maxWidth="100vw"
        height="100vh"
        maxHeight="100vh"
        className="slide-in-right-drawer"
        style={{
          position: 'fixed',
          top: '0',
          right: '0',
          borderRadius: '0',
          padding: '0',
          backgroundColor: 'white'
        }}
      >
        <div className="h-full flex flex-col">
          {/* Drawer Header */}
          <div className="flex justify-between items-center p-6 border-b">
            <Dialog.Close>
              <button className="p-2" aria-label="Close drawer">
                <Cross1Icon width="24" height="24" />
              </button>
            </Dialog.Close>
            <div></div>
          </div>

          {/* Drawer Content */}
          <div className="flex-1 p-6">
            <div className="mb-6">
              <Heading size="6" mb="2">
                {selectedDate.format('dddd, MMMM D, YYYY')}
              </Heading>
              <Text size="2" color="gray">
                {events.length} {events.length === 1 ? 'event' : 'events'} scheduled
              </Text>
            </div>

            <div className="space-y-4">
              {events.map((event, index) => (
                <div key={event.id}>
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0"
                      style={{
                        backgroundColor: event.backgroundColor,
                        color: event.color
                      }}
                    >
                      {event.title}
                    </div>
                    <div className="flex-1">
                      <Flex direction="column" gap="1">
                        <Heading size="4" mb="1">
                          {getEventTitle(event.title)}
                        </Heading>
                        <Text size="2" color="gray" mb="2">
                          {event.description}
                        </Text>
                        <Flex direction="column" gap="1">
                          <Text size="1">
                            <span className="font-medium">Time:</span> 10:00 AM - 11:00 AM
                          </Text>
                          <Text size="1">
                            <span className="font-medium">Location:</span> Studio A
                          </Text>
                          <Text size="1">
                            <span className="font-medium">Instructor:</span> Sarah Johnson
                          </Text>
                        </Flex>
                      </Flex>
                      <Flex gap="2" mt="3">
                        <Button
                          size="1"
                          onClick={() => {
                            addItem({
                              id: event.id,
                              title: getEventTitle(event.title),
                              price: 25, // You can make this dynamic based on event type
                              description: event.description,
                              date: selectedDate.format('YYYY-MM-DD'),
                              time: '10:00 AM - 11:00 AM',
                              location: 'Studio A',
                              instructor: 'Sarah Johnson'
                            })
                            .then(() => {
                              onClose();
                            })
                          }}
                        >
                          Book Session
                        </Button>
                        {/* <Button size="1" variant="outline">
                                Add to Calendar
                              </Button> */}
                      </Flex>
                    </div>
                  </div>
                  {index < events.length - 1 && <Separator className="mt-4" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default EventDetailsDrawer;
