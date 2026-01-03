const BASE_URL = 'https://github.com/adrianahaz/portfolio/';

const dataObject = {
  projects: [
    {
      title: 'Daily Dua',
      image: './assets/images/daily-dua.jpg',
      link: 'https://daily-dua-omega.vercel.app/',
      repo: 'https://github.com/adrianahaz/daily-dua',
    },
    {
      title: 'Makan Kuy',
      image: './assets/images/makan-kuy.jpg',
      link: 'https://makankuy-restaurant-app.netlify.app/',
      repo: 'https://github.com/adrianahaz/restaurant-app-dicoding',
    },
    {
      title: 'Bookshelf API',
      image: './assets/images/bookshelf-api.jpg',
      link: 'https://github.com/adrianahaz/nodejs-bookshelf-api',
      repo: 'https://github.com/adrianahaz/nodejs-bookshelf-api',
    },
  ],
  assignments: [
    {
      meeting: 'Pertemuan 2',
      title: 'Tugas 2 - Basic Tag HTML',
      description:
        'Membuat halaman web sederhana menggunakan tag-tag dasar HTML seperti heading, paragraf, dan pemisah baris.',
      link: './assignments/pertemuan-2',
      repo: BASE_URL + 'assignments/pertemuan-2',
      practice: [
        {
          title: 'Latihan 1',
          link: './assignments/pertemuan-2/latihan/latihan-1.html',
          repo: BASE_URL + 'assignments/pertemuan-2/latihan/latihan-1.html',
        },
        {
          title: 'Latihan 2',
          link: './assignments/pertemuan-2/latihan/latihan-2.html',
          repo: BASE_URL + 'assignments/pertemuan-2/latihan/latihan-2.html',
        },
      ],
    },
    {
      meeting: 'Pertemuan 3',
      title: 'Tugas 3 - Format Teks dan Karakter Khusus',
      description:
        'Belajar menggunakan tag HTML untuk mengatur tampilan teks seperti bold, italic, underline, serta menampilkan karakter khusus.',
      link: './assignments/pertemuan-3',
      repo: BASE_URL + 'assignments/pertemuan-3',
      practice: [
        {
          title: 'Latihan 1',
          link: './assignments/pertemuan-3/latihan/latihan-1.html',
          repo: BASE_URL + 'assignments/pertemuan-3/latihan/latihan-1.html',
        },
        {
          title: 'Latihan 2',
          link: './assignments/pertemuan-3/latihan/latihan-2.html',
          repo: BASE_URL + 'assignments/pertemuan-3/latihan/latihan-2.html',
        },
      ],
    },
    {
      meeting: 'Pertemuan 4',
      title: 'Tugas 4 – Menampilkan Gambar, Suara, dan Video',
      description:
        'Menambahkan elemen multimedia ke halaman web seperti gambar, audio, dan video agar lebih menarik dan interaktif.',
      link: './assignments/pertemuan-4',
      repo: BASE_URL + 'assignments/pertemuan-4',
      practice: [
        {
          title: 'Latihan 1',
          link: './assignments/pertemuan-4/latihan/latihan-1.html',
          repo: BASE_URL + 'assignments/pertemuan-4/latihan/latihan-1.html',
        },
        {
          title: 'Latihan 2',
          link: './assignments/pertemuan-4/latihan/latihan-2.html',
          repo: BASE_URL + 'assignments/pertemuan-4/latihan/latihan-2.html',
        },
        {
          title: 'Latihan 3',
          link: './assignments/pertemuan-4/latihan/latihan-3.html',
          repo: BASE_URL + 'assignments/pertemuan-4/latihan/latihan-3.html',
        },
      ],
    },
    {
      meeting: 'Pertemuan 5',
      title: 'Tugas 5 – Hyperlink',
      description: 'Membuat website portfolio dengan memanfaatkan hyperlink.',
      link: '/',
      repo: BASE_URL,
      practice: [
        {
          title: 'Latihan 1',
          link: './assignments/pertemuan-5/latihan/latihan-1.html',
          repo: BASE_URL + 'assignments/pertemuan-5/latihan/latihan-1.html',
        },
      ],
    },
    {
      meeting: 'Pertemuan 6',
      title: 'Tugas 6 – Bullet Numbering dan List',
      description:
        'Belajar membuat daftar terurut dan tidak terurut dengan tag &lt;ol&gt; dan &lt;ul&gt;, serta menambahkan item dengan &lt;li&gt;.',
      link: './assignments/pertemuan-6',
      repo: BASE_URL + 'assignments/pertemuan-6',
      practice: [
        {
          title: 'Latihan 1',
          link: './assignments/pertemuan-6/latihan/latihan-1.html',
          repo: BASE_URL + 'assignments/pertemuan-6/latihan/latihan-1.html',
        },
        {
          title: 'Latihan 2',
          link: './assignments/pertemuan-6/latihan/latihan-2.html',
          repo: BASE_URL + 'assignments/pertemuan-6/latihan/latihan-2.html',
        },
      ],
    },
    {
      meeting: 'Pertemuan 7',
      title: 'Tugas 7 - Tabel',
      description:
        'Membuat dan menata data dalam bentuk tabel menggunakan tag &lt;table&gt;, &lt;thead&gt;, &lt;tbody&gt;, dan &lt;tr&gt;.',
      link: './assignments/pertemuan-7',
      repo: BASE_URL + 'assignments/pertemuan-7',
      practice: [
        {
          title: 'Latihan 1',
          link: './assignments/pertemuan-7/latihan/latihan-1.html',
          repo: BASE_URL + 'assignments/pertemuan-7/latihan/latihan-1.html',
        },
        {
          title: 'Latihan 2',
          link: './assignments/pertemuan-7/latihan/latihan-2.html',
          repo: BASE_URL + 'assignments/pertemuan-7/latihan/latihan-2.html',
        },
      ],
    },
    {
      meeting: 'Pertemuan 8',
      title: 'Tugas 8 - Form',
      description:
        'Membuat formulir isian sederhana menggunakan tag &lt;form&gt; dengan elemen input, textarea, dan tombol submit.',
      link: './assignments/pertemuan-8',
      repo: BASE_URL + 'assignments/pertemuan-8',
      practice: [
        {
          title: 'Latihan 1',
          link: './assignments/pertemuan-8/latihan/latihan-1.html',
          repo: BASE_URL + 'assignments/pertemuan-8/latihan/latihan-1.html',
        },
      ],
    },
    {
      meeting: 'Pertemuan 9',
      title: 'Tugas 9 - Frame',
      description:
        'Mempelajari cara membagi tampilan halaman menjadi beberapa bagian menggunakan elemen &lt;frame&gt;.',
      link: './assignments/pertemuan-9',
      repo: BASE_URL + 'assignments/pertemuan-9',
      practice: [
        {
          title: 'Latihan 1',
          link: './assignments/pertemuan-9/latihan/latihan-1.html',
          repo: BASE_URL + 'assignments/pertemuan-9/latihan/latihan-1.html',
        },
      ],
    },
    {
      meeting: 'Pertemuan 10',
      title: 'Tugas 10 - Iframe',
      description:
        'Mempelajari cara menampilkan halaman web orang lain menggunakan tag &lt;iframe&gt;.',
      link: './assignments/pertemuan-10',
      repo: BASE_URL + 'assignments/pertemuan-10',
      practice: [
        {
          title: 'Latihan 1',
          link: './assignments/pertemuan-10/latihan/latihan-1.html',
          repo: BASE_URL + 'assignments/pertemuan-10/latihan/latihan-1.html',
        },
        {
          title: 'Latihan 2',
          link: './assignments/pertemuan-10/latihan/latihan-2.html',
          repo: BASE_URL + 'assignments/pertemuan-10/latihan/latihan-2.html',
        },
      ],
    },
    {
      meeting: 'Pertemuan 11',
      title: 'Tugas 11 - CSS',
      description:
        'Mempelajari cara menggunakan CSS untuk mengatur tampilan halaman web.',
      link: './assignments/pertemuan-11',
      repo: BASE_URL + 'assignments/pertemuan-11',
      practice: [
        {
          title: 'Latihan 1',
          link: './assignments/pertemuan-11/latihan/latihan-1.html',
          repo: BASE_URL + 'assignments/pertemuan-11/latihan/latihan-1.html',
        },
        {
          title: 'Latihan 2',
          link: './assignments/pertemuan-11/latihan/latihan-2.html',
          repo: BASE_URL + 'assignments/pertemuan-11/latihan/latihan-2.html',
        },
        {
          title: 'Latihan 3',
          link: './assignments/pertemuan-11/latihan/latihan-3.html',
          repo: BASE_URL + 'assignments/pertemuan-11/latihan/latihan-3.html',
        },
        {
          title: 'Latihan 4',
          link: './assignments/pertemuan-11/latihan/latihan-4.html',
          repo: BASE_URL + 'assignments/pertemuan-11/latihan/latihan-4.html',
        },
      ],
    },
    {
      meeting: 'Pertemuan 12',
      title: 'Tugas 12 - CSS Class',
      description:
        'Mempelajari cara menggunakan CSS class untuk mengatur tampilan halaman web.',
      link: './assignments/pertemuan-12',
      repo: BASE_URL + 'assignments/pertemuan-12',
      practice: [
        {
          title: 'Latihan 1',
          link: './assignments/pertemuan-12/latihan/latihan-1.html',
          repo: BASE_URL + 'assignments/pertemuan-12/latihan/latihan-1.html',
        },
        {
          title: 'Latihan 2',
          link: './assignments/pertemuan-12/latihan/latihan-2.html',
          repo: BASE_URL + 'assignments/pertemuan-12/latihan/latihan-2.html',
        },
      ],
    },
    {
      meeting: 'Pertemuan 13',
      title: 'Tugas 13 - DIV',
      description:
        'Mempelajari cara menggunakan DIV untuk mengatur tampilan halaman web.',
      link: './assignments/pertemuan-13',
      repo: BASE_URL + 'assignments/pertemuan-13',
      practice: [
        {
          title: 'Latihan 1',
          link: './assignments/pertemuan-13/latihan/latihan-1.html',
          repo: BASE_URL + 'assignments/pertemuan-13/latihan/latihan-1.html',
        },
        {
          title: 'Latihan 2',
          link: './assignments/pertemuan-13/latihan/latihan-2.html',
          repo: BASE_URL + 'assignments/pertemuan-13/latihan/latihan-2.html',
        },
        {
          title: 'Latihan 3',
          link: './assignments/pertemuan-13/latihan/latihan-3.html',
          repo: BASE_URL + 'assignments/pertemuan-13/latihan/latihan-3.html',
        },
        {
          title: 'Latihan 4',
          link: './assignments/pertemuan-13/latihan/latihan-4.html',
          repo: BASE_URL + 'assignments/pertemuan-13/latihan/latihan-4.html',
        },
        {
          title: 'Latihan 5',
          link: './assignments/pertemuan-13/latihan/latihan-5.html',
          repo: BASE_URL + 'assignments/pertemuan-13/latihan/latihan-5.html',
        },
      ],
    },
    {
      meeting: 'Pertemuan 14',
      title: 'Tugas 14 - Pengenalan JavaScript',
      description:
        'Mempelajari dasar-dasar JavaScript seperti struktur penulisan dan variabel.',
      link: './assignments/pertemuan-14',
      repo: BASE_URL + 'assignments/pertemuan-14',
      practice: [
        {
          title: 'Latihan 1',
          link: './assignments/pertemuan-14/latihan/latihan-1.html',
          repo: BASE_URL + 'assignments/pertemuan-14/latihan/latihan-1.html',
        },
        {
          title: 'Latihan 2',
          link: './assignments/pertemuan-14/latihan/latihan-2.html',
          repo: BASE_URL + 'assignments/pertemuan-14/latihan/latihan-2.html',
        },
      ],
    },
    {
      meeting: 'Pertemuan 15',
      title: 'Tugas 15 - Dialog Box',
      description: 'Mempelajari dialog box seperti alert, prompt, dan confirm.',
      link: './assignments/pertemuan-15',
      repo: BASE_URL + 'assignments/pertemuan-15',
      practice: [
        {
          title: 'Latihan 1',
          link: './assignments/pertemuan-15/latihan/latihan-1.html',
          repo: BASE_URL + 'assignments/pertemuan-15/latihan/latihan-1.html',
        },
        {
          title: 'Latihan 2',
          link: './assignments/pertemuan-15/latihan/latihan-2.html',
          repo: BASE_URL + 'assignments/pertemuan-15/latihan/latihan-2.html',
        },
        {
          title: 'Latihan 3',
          link: './assignments/pertemuan-15/latihan/latihan-3.html',
          repo: BASE_URL + 'assignments/pertemuan-15/latihan/latihan-3.html',
        },
        {
          title: 'Latihan 4',
          link: './assignments/pertemuan-15/latihan/latihan-4.html',
          repo: BASE_URL + 'assignments/pertemuan-15/latihan/latihan-4.html',
        },
        {
          title: 'Latihan 5',
          link: './assignments/pertemuan-15/latihan/latihan-5.html',
          repo: BASE_URL + 'assignments/pertemuan-15/latihan/latihan-5.html',
        },
        {
          title: 'Latihan 6',
          link: './assignments/pertemuan-15/latihan/latihan-6.html',
          repo: BASE_URL + 'assignments/pertemuan-15/latihan/latihan-6.html',
        },
        {
          title: 'Latihan 7',
          link: './assignments/pertemuan-15/latihan/latihan-7.html',
          repo: BASE_URL + 'assignments/pertemuan-15/latihan/latihan-7.html',
        },
        {
          title: 'Latihan 8',
          link: './assignments/pertemuan-15/latihan/latihan-8.html',
          repo: BASE_URL + 'assignments/pertemuan-15/latihan/latihan-8.html',
        },
        {
          title: 'Latihan 9',
          link: './assignments/pertemuan-15/latihan/latihan-9.html',
          repo: BASE_URL + 'assignments/pertemuan-15/latihan/latihan-9.html',
        },
      ],
    },
    {
      meeting: 'Pertemuan 16',
      title: 'Tugas 16 - Tipe Data dan Operator',
      description:
        'Mempelajari tipe data dan jenis-jenis operator dalam JavaScript.',
      link: './assignments/pertemuan-16',
      repo: BASE_URL + 'assignments/pertemuan-16',
      practice: [
        {
          title: 'Latihan 1',
          link: './assignments/pertemuan-16/latihan/latihan-1.html',
          repo: BASE_URL + 'assignments/pertemuan-16/latihan/latihan-1.html',
        },
        {
          title: 'Latihan 2',
          link: './assignments/pertemuan-16/latihan/latihan-2.html',
          repo: BASE_URL + 'assignments/pertemuan-16/latihan/latihan-2.html',
        },
        {
          title: 'Latihan 3',
          link: './assignments/pertemuan-16/latihan/latihan-3.html',
          repo: BASE_URL + 'assignments/pertemuan-16/latihan/latihan-3.html',
        },
        {
          title: 'Latihan 4',
          link: './assignments/pertemuan-16/latihan/latihan-4.html',
          repo: BASE_URL + 'assignments/pertemuan-16/latihan/latihan-4.html',
        },
      ],
    },
    {
      meeting: 'Pertemuan 17',
      title: 'Tugas 17 - Struktur Kendali dan Looping',
      description:
        'Mempelajari cara membuat program dengan menggunakan struktur kendali dan looping.',
      link: './assignments/pertemuan-17',
      repo: BASE_URL + 'assignments/pertemuan-17',
      practice: [
        {
          title: 'Latihan 1',
          link: './assignments/pertemuan-17/latihan/latihan-1.html',
          repo: BASE_URL + 'assignments/pertemuan-17/latihan/latihan-1.html',
        },
        {
          title: 'Latihan 2',
          link: './assignments/pertemuan-17/latihan/latihan-2.html',
          repo: BASE_URL + 'assignments/pertemuan-17/latihan/latihan-2.html',
        },
        {
          title: 'Latihan 3',
          link: './assignments/pertemuan-17/latihan/latihan-3.html',
          repo: BASE_URL + 'assignments/pertemuan-17/latihan/latihan-3.html',
        },
        {
          title: 'Latihan 4',
          link: './assignments/pertemuan-17/latihan/latihan-4.html',
          repo: BASE_URL + 'assignments/pertemuan-17/latihan/latihan-4.html',
        },
        {
          title: 'Latihan 5',
          link: './assignments/pertemuan-17/latihan/latihan-5.html',
          repo: BASE_URL + 'assignments/pertemuan-17/latihan/latihan-5.html',
        },
        {
          title: 'Latihan 6',
          link: './assignments/pertemuan-17/latihan/latihan-6.html',
          repo: BASE_URL + 'assignments/pertemuan-17/latihan/latihan-6.html',
        },
        {
          title: 'Latihan 7',
          link: './assignments/pertemuan-17/latihan/latihan-7.html',
          repo: BASE_URL + 'assignments/pertemuan-17/latihan/latihan-7.html',
        },
        {
          title: 'Latihan 8',
          link: './assignments/pertemuan-17/latihan/latihan-8.html',
          repo: BASE_URL + 'assignments/pertemuan-17/latihan/latihan-8.html',
        },
        {
          title: 'Latihan 9',
          link: './assignments/pertemuan-17/latihan/latihan-9.html',
          repo: BASE_URL + 'assignments/pertemuan-17/latihan/latihan-9.html',
        },
      ],
    },
    {
      meeting: 'Pertemuan 18',
      title: 'Tugas 18 - Function dan Array',
      description:
        'Memahami cara menggunakan function dan array dalam JavaScript.',
      link: './assignments/pertemuan-18',
      repo: BASE_URL + 'assignments/pertemuan-18',
      practice: [
        {
          title: 'Latihan 1',
          link: './assignments/pertemuan-18/latihan/latihan-1.html',
          repo: BASE_URL + 'assignments/pertemuan-18/latihan/latihan-1.html',
        },
        {
          title: 'Latihan 2',
          link: './assignments/pertemuan-18/latihan/latihan-2.html',
          repo: BASE_URL + 'assignments/pertemuan-18/latihan/latihan-2.html',
        },
        {
          title: 'Latihan 3',
          link: './assignments/pertemuan-18/latihan/latihan-3.html',
          repo: BASE_URL + 'assignments/pertemuan-18/latihan/latihan-3.html',
        },
        {
          title: 'Latihan 4',
          link: './assignments/pertemuan-18/latihan/latihan-4.html',
          repo: BASE_URL + 'assignments/pertemuan-18/latihan/latihan-4.html',
        },
        {
          title: 'Latihan 5',
          link: './assignments/pertemuan-18/latihan/latihan-5.html',
          repo: BASE_URL + 'assignments/pertemuan-18/latihan/latihan-5.html',
        },
        {
          title: 'Latihan 6',
          link: './assignments/pertemuan-18/latihan/latihan-6.html',
          repo: BASE_URL + 'assignments/pertemuan-18/latihan/latihan-6.html',
        },
        {
          title: 'Latihan 7',
          link: './assignments/pertemuan-18/latihan/latihan-7.html',
          repo: BASE_URL + 'assignments/pertemuan-18/latihan/latihan-7.html',
        },
        {
          title: 'Latihan 8',
          link: './assignments/pertemuan-18/latihan/latihan-8.html',
          repo: BASE_URL + 'assignments/pertemuan-18/latihan/latihan-8.html',
        },
      ],
    },
  ],
};

export const getAllProjects = () => dataObject.projects;

export const getAllAssignments = () => dataObject.assignments;
