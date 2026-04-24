


const SAE_AERO_INFO_TXT_1 = 'We are a student organization at the University of Illinois Urbana-Champaign dedicated to plane-building. We plan on participating in the SAE Aero Design competition.'

const SAE_AERO_INFO_TXT_2 = 'Three four five. Six seven eight. Nine ten eleven. Twelve thirteen fourteen. Fifteen sixteen seventeen.'

const CONSTITUTION_TXT = 'Read our official club constitution to learn about our organization\'s structure and bylaws.'

const AERO_TEAM_TXT = ''

const STRUCTURES_TEAM_TXT = ''

const AVIONICS_TEAM_TXT = ''

const BUSINESS_TEAM_TXT = ''

export default function AboutPage() {
  return (
    <main className="flex flex-col">
      <section className="flex flex-1 flex-col items-center justify-center bg-ice-blue px-6 py-12 text-center">
        <h1 className="text-4xl font-bold text-prussian-blue">About</h1>
        <p className="mt-4 max-w-2xl text-lg text-deep-navy">
          {SAE_AERO_INFO_TXT_1}
        </p>
      </section>

      <section className="flex flex-1 flex-col items-center bg-zinc-50 px-6 py-12">
        <h1 className="text-4xl font-bold text-prussian-blue text-center">Constitution</h1>
        <p className="mt-4 max-w-2xl text-lg text-deep-navy text-center">
          {CONSTITUTION_TXT}
        </p>
        <div className="mt-6 w-full max-w-4xl rounded-lg overflow-hidden shadow-lg border border-gray-300">
          <div className="flex items-center justify-between bg-gray-800 px-4 py-2">
            <span className="text-white text-sm font-medium">SAE Aero @ UIUC Constitution</span>
            <a
              href="https://static-prod-us-east-1.campusgroups.com/upload/urbanachampaign/2025/doc_671287_SAE_Aero_Illinois_Constitution_aa00e90b-a363-437f-ba3a-12b30aa1f238_1121112422.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-300 hover:text-white transition-colors"
            >
              Open in new tab ↗
            </a>
          </div>
          <iframe
            src="https://static-prod-us-east-1.campusgroups.com/upload/urbanachampaign/2025/doc_671287_SAE_Aero_Illinois_Constitution_aa00e90b-a363-437f-ba3a-12b30aa1f238_1121112422.pdf"
            className="w-full"
            style={{ height: '800px' }}
            title="SAE Aero @ UIUC Constitution"
          />
        </div>
      </section>

    <section className="flex flex-1 flex-col items-center bg-zinc-50 px-6 py-12">
      <h1 className="text-4xl font-bold text-prussian-blue text-center">Aerodynamics</h1>
      <p>

      </p>
    </section>

        <section className="flex flex-1 flex-col items-center bg-zinc-50 px-6 py-12">
      <h1 className="text-4xl font-bold text-prussian-blue text-center">Structures</h1>
      <p>

      </p>
    </section>

    <section className="flex flex-1 flex-col items-center bg-zinc-50 px-6 py-12">
      <h1 className="text-4xl font-bold text-prussian-blue text-center">Avionics</h1>
      <p>

      </p>
    </section>

    <section className="flex flex-1 flex-col items-center bg-zinc-50 px-6 py-12">
      <h1 className="text-4xl font-bold text-prussian-blue text-center">Business</h1>
      <p>

      </p>
    </section>


    <section className="flex flex-1 flex-col items-center bg-zinc-50 px-6 py-12">
      <h1 className="text-4xl font-bold text-prussian-blue text-center">Executive Board</h1>
    </section>

    </main>
  );
}