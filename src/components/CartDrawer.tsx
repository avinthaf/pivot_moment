import { Dialog } from "@radix-ui/themes";
import { Cross1Icon } from "@radix-ui/react-icons";
import Cart from './Cart';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartDrawer = ({ isOpen, onClose }: CartDrawerProps) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Content
        width={{ initial: "100dvw", lg: "50dvw" }}
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
          <div className="flex-1 overflow-hidden">
            <Cart />
          </div>
        </div>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default CartDrawer;
