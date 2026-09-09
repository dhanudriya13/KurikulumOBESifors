from pypdf import PdfReader

r = PdfReader(r"d:/kurikulumobe/panduankurikulumobe.pdf")
out = []
for i, p in enumerate(r.pages):
    out.append(f"\n--- PAGE {i+1} ---\n")
    out.append(p.extract_text() or "")
with open(r"d:/kurikulumobe/pdf_text.txt", "w", encoding="utf-8") as f:
    f.write("".join(out))
print("done, chars:", sum(len(x) for x in out))
