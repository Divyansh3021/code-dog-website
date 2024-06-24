import { TracingBeam } from "./ui/tracing-beam";
import { twMerge } from "tailwind-merge";


export default function Features() {
    const dummyContent = [
        {
          title: "Effortless Code Search",
          description: (
            <>
              <p>
              Quickly find and retrieve code snippets from your previous projects without leaving VS Code. Save time and focus on what matters most—coding.
              </p>
            </>
          ),
        },
        {
          title: "Customizable Integrations",
          description: (
            <>
              <p>
              Tailor Code Dog to fit your unique coding style and project requirements. Adapt past solutions seamlessly to meet your current needs.
              </p>
            </>
          ),
        },
        {
          title: "Boosted Productivity",
          description: (
            <>
              <p>
              Say goodbye to redundant coding and hello to a streamlined workflow. Code Dog enhances your coding speed and efficiency by reusing your best work.
              </p>
            </>
          ),
        },
        {
            title: "Seamless VS Code Integration",
            description:(
                <p>
                    Enjoy a smooth and intuitive experience with Code Dog’s seamless integration into VS Code. It works right where you do, making it an essential part of your development toolkit.
                </p>
            )
        }
      ];

    return (
        <div>

            <h2 className="text-lg md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 mt-20">
              Features
            </h2>

            <TracingBeam className="px-5 mt-10">
                <div className="max-w-2xl mx-auto antialiased pt-4 relative ml-4">
                    {dummyContent.map((item, index) => (
                        <div key={`content-${index}`} className="mb-10">        
                        <p className={twMerge("text-lg mb-4 text-purple-400")}>
                        {item.title}
                        </p>
            
                        <div className="text-sm  prose prose-sm dark:prose-invert">
                        {item.description}
                        </div>
                    </div>
                    ))}
                </div>
            </TracingBeam>
        </div>

    )


}