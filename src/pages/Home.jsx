import CategoryGrid from "../components/CategoryGrid";
import Footer from "../components/Footer";
import PuzzlePieceIcon from "../components/PuzzlePieceIcon";

function Home() {
  return (
    <>
      <main className="mx-auto max-w-4xl p-4 lg:p-8">
        <div className="mt-6 space-y-12 fade-in">
          <section className="relative overflow-hidden px-3 py-5 text-center">
            <PuzzlePieceIcon
              className="pointer-events-none absolute left-4 top-1/2 h-20 w-20 -translate-y-1/2 -rotate-12 text-slate-200/30 sm:h-24 sm:w-24"
            />

            <PuzzlePieceIcon
              className="pointer-events-none absolute right-4 top-1/2 h-16 w-16 -translate-y-1/2 rotate-12 text-slate-200/30 sm:h-20 sm:w-20"
            />

            <div className="relative z-10 space-y-3">
              <h2 className="text-2xl font-black uppercase tracking-widest text-slate-800 sm:text-3xl">
                Mảnh Ghép Chữ Hán
              </h2>

              <p className="animate-slogan-magic mx-auto max-w-2xl text-sm font-bold italic sm:text-base">
                Khám phá thế giới chữ Hán qua những
                mảnh ghép kỳ diệu
              </p>
            </div>
          </section>

          <CategoryGrid />
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Home;