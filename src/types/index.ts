export interface Project {
    title: string;
    tags: string[];
    desc: string;
    img: string;
    btn: string;
    icon: string;
}

export interface TimelineItemProps {
    icon: string;
    title: string;
    date: string;
    badge?: string;
    content: string | string[];
    isLast?: boolean;
}

export interface ExpertiseCardProps {
    icon: string;
    title: string;
    desc: string;
}

export interface SkillBarProps {
    label: string;
    percent: string;
}
