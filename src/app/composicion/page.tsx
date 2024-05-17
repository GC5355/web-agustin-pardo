import React from "react";

export default function composicion() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-10 gap-10 mx-32">
      <h1 className="text-4xl font-montserrat font-normal text-slate-50 tracking-tight lg:text-5xl">
        COMPOSICIONES
      </h1>

      <div className="flex content-center justify-center mt-36 max-w-full ">
        <div className="grid grid-cols-2 gap-5 ">
          <section className="grid grid-cols-2">
            <div className="text-slate-50">
              <h3 className="font-montserrat font-normal text-3xl tracking-widest text-slate-50 items-center select-none">
                hola
              </h3>
              <p className="font-montserrat font-normal text-lg tracking-normal text-slate-50  items-center select-none">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae ipsum, amet aut adipisci quae voluptates et
                aspernatur, nihil tempora, neque vero! Est et magnam nostrum
                sed, ipsum ea odio a?
              </p>
            </div>
            <div className="text-slate-50">VIDEO</div>
          </section>

          <section className="grid grid-cols-2">
            <div className="text-slate-50">
              <h3 className="font-montserrat font-normal text-3xl tracking-widest text-slate-50 items-center select-none">
                hola
              </h3>
              <p className="font-montserrat font-normal text-lg tracking-normal text-slate-50  items-center select-none">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae ipsum, amet aut adipisci quae voluptates et
                aspernatur, nihil tempora, neque vero! Est et magnam nostrum
                sed, ipsum ea odio a?
              </p>
            </div>
            <div className="text-slate-50">VIDEO</div>
          </section>
        </div>
      </div>
    </main>
  );
}
