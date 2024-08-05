import React, { useRef,useState } from "react";
import useMeasure from "react-use-measure";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useDragControls,
  useAnimate,
} from "framer-motion";
import { RxCross1 } from "react-icons/rx";

const BoarCard = ({key,img,name,position,desc}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative h-80 w-72 rounded-xl bg-white ">
      <div
        style={{
          backgroundImage: `url(${img})`,
          // backgroundSize: "cover",
          // backgroundPosition: "center",
        }}
        onClick={() => {
          setOpen(true);
        }}
       className="absolute inset-4 grid place-content-end p-2 rounded-xl bg-white shadow-lg  justify-center bg-cover bg-center   before:ease  overflow-hidden transition-all before:absolute before:right-0 before:top-0 before:h-[500px] before:w-20 before:-translate-x-96 before:-translate-y-40 before:rotate-45 before:bg-white before:opacity-15 before:duration-700 hover:before:translate-x-80 hover:before:translate-y-0"
      >
        <div 
         style={{ transform: "translateZ(50px)",}}
        className="bg-white bg-opacity-80 p-2 w-full">
        <p

              className="text-center text-lg font-bold"
            >
            {name}
        </p>
        <p  
            className="text-center text-sm">
        {position}
        </p>
        </div>

      </div>
      <DragCloseDrawer open={open} setOpen={setOpen}>
        <div className="mx-auto max-w-7xl space-y-4 text-neutral-400 flex flex-col md:flex-row items-center gap-10">
          <div className="flex flex-[0.8]">
            <img src={img} className=" rounded-3xl h-96 w-auto"  />
          </div>
          
          <div className="md:w-1/2 space-y-4">
          <h2 className="text-4xl font-bold text-neutral-200">
            {name}
          </h2>
          <p>
          {desc.about}
          </p>
          <p>
          {desc.edu}
          </p>
          </div>

        </div>
      </DragCloseDrawer>
    </div>
  );
};

const DragCloseDrawer = ({ open, setOpen, children }) => {
  const [scope, animate] = useAnimate();
  const [drawerRef, { height }] = useMeasure();

  const y = useMotionValue(0);
  const controls = useDragControls();

  const handleClose = async () => {
    animate(scope.current, {
      opacity: [1, 0],
    });

    const yStart = typeof y.get() === "number" ? y.get() : 0;

    await animate("#drawer", {
      y: [yStart, height],
    });

    setOpen(false);
  };

  return (
    <>
      {open && (
        <motion.div
          ref={scope}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={handleClose}
          className="fixed inset-0 z-50 bg-neutral-950/70"
        >
          <motion.div
            id="drawer"
            ref={drawerRef}
            onClick={(e) => e.stopPropagation()}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{
              ease: "easeInOut",
            }}
            className="absolute bottom-0 h-[75vh] w-full overflow-hidden rounded-t-3xl bg-neutral-900"
            style={{ y }}
            drag="y"
            dragControls={controls}
            onDragEnd={() => {
              if (y.get() >= 100) {
                handleClose();
              }
            }}
            dragListener={false}
            dragConstraints={{
              top: 0,
              bottom: 0,
            }}
            dragElastic={{
              top: 0,
              bottom: 0.5,
            }}
          >
            <div className="absolute left-0 right-0 top-0 z-10 flex justify-center bg-neutral-900 p-4">
              <button
                onPointerDown={(e) => {
                  controls.start(e);
                }}
                className="h-2 w-14 cursor-grab touch-none rounded-full bg-neutral-700 active:cursor-grabbing"
              ></button>
            </div>
            <div className="absolute top-4 right-4 z-10" onClick={handleClose}>
            <RxCross1 className="w-6 h-6 text-neutral-700 "/>
            </div>
            <div className="relative overflow-y-auto z-0 h-full  p-4 pt-12 scrollbar-thumb-neutral-700 scrollbar-track-neutral-900 scrollbar-thin">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default BoarCard;