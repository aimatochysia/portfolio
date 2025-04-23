import pypandoc
import os

def htmlToDocAndPdf(htmlPath, docxPath, pdfPath):
    try:
        pypandoc.convert_file(
            htmlPath,
            'docx',
            outputfile=docxPath
        )
        print(f"✅ DOCX saved to: {docxPath}")
        
        pypandoc.convert_file(
            htmlPath,
            'pdf',
            outputfile=pdfPath,
            extra_args=['--pdf-engine=xelatex']
        )
        print(f"✅ PDF saved to: {pdfPath}")

    except Exception as e:
        print(f"❌ Error: {e}")


htmlToDocAndPdf(
    htmlPath="public\CV\index.html",
    docxPath="public\CV\Curriculum_Vitae.docx",
    pdfPath="public\CV\Curriculum_Vitae.pdf"
)
