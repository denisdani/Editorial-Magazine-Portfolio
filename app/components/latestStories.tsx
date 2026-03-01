import Link from "next/link";

import { FiArrowUpRight } from "react-icons/fi";

import StoryCard from "./storyCard";
import QuoteCard from "./quoteCard";

export default function LatestStories() {
  return (
    <section>
      <div className="flex flex-row justify-between items-end mt-8 md:mt-16 border-b border-gray-200 pb-4">
        <h2 className="font-display font-bold text-4xl">Latest Stories</h2>

        <Link
          href={"#"}
          className="hidden md:inline-flex flex-row gap-1 items-center text-gray-500 text-sm font-medium hover:text-primary transition-colors"
        >
          View Archive <FiArrowUpRight size={16} />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 mb-16">
        <StoryCard
          title="Minimalist Lofts in Berlin's Old East"
          subtitle="Refurbishing industrial heritage into livable, breathing spaces without losing the grit."
          category="Interiors"
          bgUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuA4EEzm_b0XENMkKF0sxtRLua3iePAs9igkWFG-MAxRDER7kMehySvRKayVWREySgfHWqkIMnGzLvjqJJTO02kgaupPwnHxGLbP7OmOHgku97f1w5mI1zrR6OA2ptxTWrJ5f2hZ9cJ9DjyQdyZCmrjg1iRMSkVm_iJ0yYuxZDZraS-Odo1BLhpuQth_Q3XGdD1FS79xMjQaYyyt7ypbqBgNnRtd4surDc2ZQTQQKt8Ajj-TS6SQ6G3SjqGO_HpwhFbwIad-NRyuytf-"
          aspect="aspect-3/4"
        />
        <StoryCard
          title="Nordic Cabin Retreats"
          subtitle="Why silence and snow are the ultimate luxury in 2024."
          category="Travel"
          bgUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuCIviav4qf--krLy4qltMNTZ1xhpdKgFce18RrbkoIb9kKncwb5gh2m63oVMfSvF6_9w4zd1Ruc9MQYiuAjyWbugJOhWzGuYC51tgWFiO7Xsh94W7zFb9iCvGfLQFAxR8Tzui7Nm52VyQ8Jpbvx3LpFbWGI6zQ3w2MhfUOA3xRAaKOi1_xGvl7zHkDogfOoUm7d81-j2_LHE9xuim1Q1qLPxce122g1txTfUqdtK1Y7tjd9g409urPxC9MXa7Vo0QjdSA8MVcagfN-w"
        />
        <StoryCard
          title="The Future of Urban Parks"
          subtitle="Integrating vertical gardens into dense city centers."
          category="Landscape"
          bgUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuAIikHxdTzg1cPur6mDJXAIsHPbmTl0i26sitKZC5i5VcTVnHGbHSIW47DhtKCnnsvdHWLzdb3IvcrzV-BYfRFr1NtvZ2A_dwnnbKoy2dcuZdfT0nCzqkvsE1CSgkdPDDIqNZ2kJJJxoRtdITmh6U0speNiJ_9WnkacC_6rTuUVs1KqBM1gkIsVkmIV51EoGv_3SU0UhQiwem3Y0ELdty29M9yRpdvPOfqImRZd1BfkgRL2-KXlOCkMdIev5C30gRRIxpz-48Mkp5Y9"
        />
        <StoryCard
          title="Color Theory in 2024"
          subtitle="Moving away from beige: The return of vibrant facades."
          category="Culture"
          bgUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuD6lJXxhfef7FbLeOMdbukMRNp2ziEUHHcH7qt4uic5l97OlNRBnTliDXTS-e--cub4umrfeRmp8w1t1Tjli2_GpMkRoDsUucRv-RLHjZJw2zNkVutnIuNSs12dFnmI6Uudi6GOqFspEaecbgnHCyOrMx7aNBWkfzPX4fXmQXaHg0ucZND68DqT2nrmo949F-UPA82jSffBKuBJ_CrWsFW02lj1ANZbVsAgjAOuNADqq_DwWqlWwqvxCV1-RkBnpNlFdSxN2pXoA3OQ"
        />
        <StoryCard
          title="Sustainable Woodworking"
          subtitle="The artisans preserving ancient Japanese joinery techniques for modern furniture design."
          category="Design"
          bgUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuDMJwEeGGT12KJJFzMggvD5q0Y7d91qFqoFULZQtSXKFdKHtTRgsuc_uTiI1Ugd6g19pMVB_aA2bC_vy4hXUKEqNdEeV2MxJMk3gMFCFkRZB6o1m6AFsYC0BIwDhMBWv_IN23s68FSN-BEj5GfAIULmK6XhPpzKRLSBdtTaN2MqAQtl7uSYhz8y5KlI09JuwrPOd26HuEICGCsiIF-BKFpmtRrE13TW1qnnkxEOAf3B16p3tvYnXY_v_328jauI-h8WZ1sNtpiy1STq"
          aspect="aspect-3/4"
        />
        <QuoteCard
          text="Architecture should speak of its time and place, but yearn for timelessness."
          author="Frank Gehry"
        />
      </div>
    </section>
  );
}
